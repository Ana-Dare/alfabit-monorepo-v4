const fs = require('fs-extra');
const path = require('path');

async function createComponent(componentName) {
	try {
		const templateDir = path.join(__dirname, '../packages/component-template');
		const targetDir = path.join(__dirname, '../packages', `alfabit-${componentName.toLowerCase()}`);

		// Verificar se o diretório do template existe
		if (!fs.existsSync(templateDir)) {
			throw new Error(`Não foi encontrado o diretório de template ${targetDir}`);
		}
		// Verificar se o diretório de destino existe
		if (fs.existsSync(targetDir)) {
			throw new Error(`O diretório do componente ${targetDir} já existe`);
		}

		// Copiar template de componente
		await fs.copy(templateDir, targetDir);
		console.log(`Template copiado com sucesso para ${targetDir}`);

		// Substituir "Component" pelo novo nome do componente em todos os arquivos
		const files = await fs.readdir(targetDir);

		for (const file of files) {
			const filePath = path.join(targetDir, file);
			const stat = await fs.stat(filePath);

			if (stat.isDirectory()) {
				const subFiles = await fs.readdir(filePath);
				files.push(...subFiles.map((subFile) => path.join(file, subFile)));
				continue;
			}

			if (
				file.endsWith('.tsx') ||
				file.endsWith('.ts') ||
				file.endsWith('.json') ||
				file.endsWith('js')
			) {
				console.log(`Processando o arquivo: ${file}`);
				let content = await fs.readFile(filePath, 'utf-8');

				content = content.replace(/Component/g, componentName);
				content = content.replace(/component-template/g, componentName.toLowerCase());

				await fs.writeFile(filePath, content);
			}
		}

		// Renomear os arquivos
		const renames = [
			['src/Component.tsx', `src/${componentName}.tsx`],
			['src/Component.styles.ts', `src/${componentName}.styles.ts`],
			['src/Component.stories.ts', `../../apps/docs/src/stories/${componentName}.stories.ts`],
		];

		for (const [oldPath, newPath] of renames) {
			const oldFullPath = path.join(targetDir, oldPath);
			const newFullPath = path.join(targetDir, newPath);

			if (fs.existsSync(oldFullPath)) {
				await fs.rename(oldFullPath, newFullPath);
				console.log(`Renomeando: ${oldFullPath} -> ${newFullPath}`);
			} else {
				console.warn(`Aviso: Arquivo não encontrado para ser renomeado: ${oldPath}`);
			}
		}

		console.log(`Componente ${componentName} criado com sucesso!`);
	} catch (error) {
		console.error(`Erro ao criar o componente ${componentName}:`, error);
		process.exit(1);
	}
}

// Exemplo de uso: node create-component.js text-block
const componentName = process.argv[2];
if (!componentName) {
	console.error('Por favor, forneça um nome para o componente');
	process.exit(1);
}

createComponent(componentName);
