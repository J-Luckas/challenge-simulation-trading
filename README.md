# Simulação de Investimentos
### Esta aplicação foi baseada em um desafio proposto e simula investimentos baseados em suas respostas.

## Breve descrição das tecnologias escolhidas:
&nbsp;&nbsp;&nbsp;&nbsp;Decidi trabalhar com ReactJS e TypeScript pois me sinto bem mais confiante, além da simplicidade de manutenção e ajuste. Além disso, acho bastante interessante alguns hooks e a facilidade que podem ser importados e utilizados, exemplo: Styled Components, React Icons, etc. Escolhi por realizar alguns testes automatizados com o CodeceptJS por ser muito semântico. 

## Requisitos:
- Docker instalado em sua máquina.
- Inicializar o banco de dados fake em sua máquina.
- Desejável que tenha o node para rodar o banco de dados fake.

## Inicialização do projeto
#### Com todos os requisitos atendidos:
- Clonar o repositório
- yarn json-server db.json / npx json-server db.json -> NA PORTA 3000
- Executar docker-compose up;
- A aplicação estará rodando na porta 3001, sendo assim basta acessar: http://localhost:3001
