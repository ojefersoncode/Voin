'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Folder } from 'lucide-react';

interface Step4Props {
  github: boolean;
  onChangeGithub: (checked: boolean) => void;
}

export const Step4 = ({ github, onChangeGithub }: Step4Props) => {
  const [vscode, setVscode] = useState(false);
  const [folderPath, setFolderPath] = useState<string | null>(null);

  const handleOpenFolder = async () => {
    if ('showDirectoryPicker' in window) {
      try {
        const dirHandle = await (window as any).showDirectoryPicker();
        setFolderPath(dirHandle.name);
      } catch (error) {
        console.error('Erro ao selecionar pasta:', error);
      }
    } else {
      document.getElementById('fileInput')?.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFolderPath(event.target.files[0].name);
    }
  };

  return (
    <div className="text-black dark:text-white">
      <h1 className="text-black dark:text-white">Configurações extras</h1>

      <div className="py-4">
        <div
          className="flex flex-col w-full gap-2 justify-center items-center rounded-lg border border-gray-500 dark:border-gray-800 py-6 cursor-pointer"
          onClick={handleOpenFolder}
        >
          <Folder className="w-10 h-10 text-gray-700 dark:text-gray-400" />
          <span className="text-base font-semibold text-gray-700 dark:text-gray-400">
            Seleciona um local para salvar
          </span>
          {folderPath && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {folderPath}
            </span>
          )}
        </div>
        {/* Input oculto para mobile */}
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>

      <label className="flex border p-4 rounded-lg items-center text-black dark:text-white mt-2">
        <Checkbox
          checked={github}
          onCheckedChange={(checked: boolean) => onChangeGithub(checked)}
          className="mr-2 text-black dark:text-white"
        />
        Criar repositório no GitHub
      </label>

      <label className="flex border p-4 mt-4 rounded-lg items-center text-black dark:text-white">
        <Checkbox
          checked={vscode}
          onCheckedChange={(checked: boolean) => setVscode(checked)}
          className="mr-2 text-black dark:text-white"
        />
        Abrir com VS Code
      </label>
    </div>
  );
};
