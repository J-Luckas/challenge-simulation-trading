import { Container, CardContainer } from './styles';
import { CardResult } from '../CardResult/index';
import { useSimulations } from '../../hooks/useSimulation';
import { CardGraph } from '../CardGraph/index';

export function InvestResult(){

    const { simulations } = useSimulations();
    if(simulations.length === 0)  {
        return (
            <Container>
            </Container>
        );
    }else{
        return (
            <Container>
                <h2>
                    Resultado da Simulação
                </h2>
                <CardContainer>
                    <CardResult
                        isPercents={false}
                        value={simulations[0].valorFinalBruto}
                        title="Valor final bruto"
                    />
                    <CardResult
                        isPercents={true}
                        value={simulations[0].aliquotaIR}
                        title="Alíquota de IR"
                    />
                    <CardResult
                        isPercents={false}
                        value={simulations[0].valorPagoIR}
                        title="Valor pago em IR"
                    />
                    <CardResult
                        isPercents={false}
                        value={simulations[0].valorFinalLiquido}
                        title="Valor final líquido"
                    />
                    <CardResult
                        isPercents={false}
                        value={simulations[0].valorTotalInvestido}
                        title="Valor Total Investido"
                    />
                    <CardResult
                        isPercents={false}
                        value={simulations[0].ganhoLiquido}
                        title="Ganho Líquido"
                    />
                </CardContainer>
                <CardGraph withAport={Object.values(simulations[0].graficoValores.comAporte)} withoutAport={Object.values(simulations[0].graficoValores.semAporte)} />
            </Container>
        );
    }
}