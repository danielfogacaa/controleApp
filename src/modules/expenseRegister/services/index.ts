import { getPrivate } from "@/services/private";

export interface IExpenseType {
  id: number;
  nome: string;
  descricao: string;
  ativo: true;
  ordem: number;
  dataAlteracao: string;
  dataInlcusão: string;
  usuarioInclusaoId: string;
  usuarioAlteracaoId: string;
}

export const getExpenseTypes = async () => {
  const url = `https://apptipofinanca20250219141722.azurewebsites.net/api/v1/TipoFinanca`;
  const response = await getPrivate<IExpenseType[]>(url);

  return response?.data;
};
