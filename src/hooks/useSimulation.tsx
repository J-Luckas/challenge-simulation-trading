import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

interface SimulationsProviderProps {
  children: ReactNode;
}

interface SimulationsContextData {
  simulations: Simulation[];
  searchSimulation: (simulation: SimulationInput) => Promise<void>;
}

interface Simulation {
  tipoIndexacao: string;
  tipoRendimento: string;
  valorFinalBruto: number;
  aliquotaIR: number;
  valorPagoIR: number;
  valorTotalInvestido: number;
  valorFinalLiquido: number;
  ganhoLiquido: number;
  graficoValores: {
    comAporte: {};
    semAporte: {};
  };
}

type SimulationInput = Pick<Simulation, 'tipoIndexacao' | 'tipoRendimento'>;

const SimulationsContext = createContext({} as SimulationsContextData);

export function SimulationsProvider({ children }: SimulationsProviderProps) {
  const [simulations, setSimulations] = useState<Simulation[]>([]);

  async function searchSimulation({ tipoIndexacao: indexType, tipoRendimento: rentability }: SimulationInput) {
    const response = await api.get('simulacoes', {
      params: {
        tipoIndexacao: indexType,
        tipoRendimento: rentability,
      },
    });
    if (response.data.length <= 0) toast.error('Nenhuma simulação encontrada. Tente com outros parâmetros.');

    setSimulations(response.data);
  }

  return (
    <SimulationsContext.Provider
      value={{
        simulations,
        searchSimulation,
      }}>
      {children}
    </SimulationsContext.Provider>
  );
}

export function useSimulations() {
  const context = useContext(SimulationsContext);

  return context;
}
