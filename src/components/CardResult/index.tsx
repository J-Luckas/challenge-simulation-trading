import { Container } from './styles';

interface CardResultProps {
  isPercents: boolean;
  value: number;
  title: string;
}

export function CardResult({ isPercents, value, title }: CardResultProps) {
  return (
    <Container>
      <h4>{title}</h4>
      <p>
        {isPercents
          ? `${value}%`
          : new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(Number(value))}
      </p>
    </Container>
  );
}
