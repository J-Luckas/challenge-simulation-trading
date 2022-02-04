import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CardGraphProps {
    withAport: number[];
    withoutAport: number[];
}

export function CardGraph({ withAport, withoutAport }: CardGraphProps) {

    let data: object[] = [];    
    withAport.forEach((value, index) => {
        data.push({
            name: `Mês ${index + 1}`,
            'Com aporte': Math.round(withoutAport[index]),
            'Sem aporte': Math.round(value),
            amt: Math.round(value - withoutAport[index])
        });
    });


    return (
        <div style={{height: '450px'}}>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Sem aporte" stackId="a" fill="##000000" />
                    <Bar dataKey="Com aporte" stackId="a" fill="#ed8e53" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}