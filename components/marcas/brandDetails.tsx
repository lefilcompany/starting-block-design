// components/marcas/BrandDetails.tsx
'use client';

import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
// **NOVO:** Importando ícones adicionais
import { Edit, Trash2, Tag, ExternalLink, FileDown } from 'lucide-react';
import type { Brand, MoodboardFile } from '@/types/brand';

interface BrandDetailsProps {
  brand: Brand | null;
  onEdit: (brand: Brand) => void;
  onDelete: () => void;
}

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
};

// Componente para renderizar um campo de detalhe de TEXTO
const DetailField = ({ label, value }: { label: string, value?: string }) => {
  if (!value) return null;
  return (
    <div className="p-3 bg-muted/50 rounded-lg break-words">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-semibold text-foreground whitespace-pre-wrap">{value}</p>
    </div>
  );
};

// **NOVO:** Componente unificado para renderizar o campo de arquivo (imagem ou outro)
const FileDetailField = ({ label, file }: { label: string, file?: MoodboardFile | null }) => {
  if (!file || !file.content) return null;

  const isImage = file.type.startsWith('image/');

  return (
    <div className="p-3 bg-muted/50 rounded-lg">
      <p className="text-sm text-muted-foreground mb-2">{label}</p>
      {isImage ? (
        // Renderiza a imagem
        <div className='relative group'>
          <img src={file.content} alt={file.name} className="rounded-md max-h-48 w-full object-cover" />
          <a
            href={file.content}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ExternalLink className="text-white h-8 w-8" />
          </a>
        </div>
      ) : (
        // Renderiza um link para download de outros arquivos (PDF, etc.)
        <div className="flex items-center space-x-3">
          <FileDown className="h-10 w-10 text-primary flex-shrink-0" />
          <div className='flex-grow truncate'>
            <p className="font-semibold text-foreground truncate">{file.name}</p>
            <a
              href={file.content}
              download={file.name}
              className="text-sm text-primary hover:underline"
            >
              Baixar arquivo
            </a>
          </div>
        </div>
      )}
    </div>
  )
}


export default function BrandDetails({ brand, onEdit, onDelete }: BrandDetailsProps) {
  if (!brand) {
    return (
      <div className="lg:col-span-1 h-full bg-card p-6 rounded-2xl border-2 border-dashed border-secondary/20 flex flex-col items-center justify-center text-center">
        <Tag className="h-16 w-16 text-muted-foreground/50 mb-4" />
        <h3 className="text-xl font-semibold text-foreground">Nenhuma marca selecionada</h3>
        <p className="text-muted-foreground">Selecione uma marca na lista para ver os detalhes ou crie uma nova.</p>
      </div>
    );
  }

  const wasUpdated = brand.createdAt !== brand.updatedAt;

  return (
    <div className="lg:col-span-1 h-full bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 border-secondary/20 flex flex-col overflow-hidden">

      <div className="flex items-center mb-6 flex-shrink-0">
        <div className="bg-gradient-to-br from-secondary to-primary text-white rounded-xl w-16 h-16 flex items-center justify-center font-bold text-3xl mr-4 flex-shrink-0">
          {brand.name.charAt(0).toUpperCase()}
        </div>
        <h2 className="text-2xl font-bold text-foreground break-words">{brand.name}</h2>
      </div>

      <div className="overflow-y-auto pr-2 flex-grow">
        <div className="space-y-4 text-left">
          <DetailField label="Responsável" value={brand.responsible} />
          <DetailField label="Segmento" value={brand.segment} />
          <DetailField label="Valores" value={brand.values} />
          <DetailField label="Palavras-Chave" value={brand.keywords} />
          <DetailField label="Metas do Negócio" value={brand.goals} />
          <DetailField label="Inspirações" value={brand.inspirations} />
          <DetailField label="Indicadores de Sucesso" value={brand.successMetrics} />
          <DetailField label="Referências de Conteúdo" value={brand.references} />
          <DetailField label="Datas Especiais" value={brand.specialDates} />
          <DetailField label="Promessa Única" value={brand.promise} />
          <DetailField label="Marcos e Cases" value={brand.milestones} />
          <DetailField label="Restrições" value={brand.restrictions} />
          <DetailField label="Restrições de Setor" value={brand.sectorRestrictions} />
          <DetailField label="Crises (Existentes ou Potenciais)" value={brand.crisisInfo} />
          <DetailField label="Colaborações e Ações com Influenciadores" value={brand.collaborations} />
          <FileDetailField label="Moodboard/Identidade Visual" file={brand.moodboard} />
          <DetailField label="Data de Criação" value={formatDate(brand.createdAt)} />
          {wasUpdated && (
            <DetailField label="Última Atualização" value={formatDate(brand.updatedAt)} />
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mt-6 flex-shrink-0">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="w-full flex-1 rounded-full py-5">
              <Trash2 className="mr-2 h-4 w-4" /> Deletar
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Essa ação não pode ser desfeita. Isso irá deletar permanentemente a marca "{brand.name}".
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} className="bg-destructive hover:bg-destructive/90">Deletar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button onClick={() => onEdit(brand)} className="w-full flex-1 rounded-full py-5">
          <Edit className="mr-2 h-4 w-4" /> Editar marca
        </Button>
      </div>
    </div>
  );
}