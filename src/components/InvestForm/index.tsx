import { FormEvent, useEffect, useState } from "react";
import { Container, Form, LabelOptions, InfoYieldDiv, ButtonSubmit, Label } from './styles';
import { FiCheckSquare, FiInfo } from 'react-icons/fi'
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useSimulations } from "../../hooks/useSimulation";

export function InvestForm(){

    const [ initialAport, setInitialAport ] = useState('');
    const [ monthlyAport, setMonthlyAport ] = useState('');

    const [ rentability, setRentability ] = useState('');

    const [ deadline ,setDeadline ] = useState('');
    
    const [ yieldInput, setYieldInput ] = useState('bruto');    
    const [ indexTypeInput, setIndexTypeInput ] = useState('pos');    
    
    const [ ipca, setIpca ] = useState(0);
    const [ cdi, setCdi ] = useState(0);

    const [ isFormFully, setIsFormFully ] = useState(false);
    const [ errorsForm, setErrorsForm ] = useState<string[]>([]);

    const { searchSimulation } = useSimulations();

    useEffect(() =>{
        api.get('indicadores')            
            .then(response => {
                const [cdi, ipca] = response.data;
                
                setCdi(Number(cdi.valor));
                setIpca(Number(ipca.valor));
            })
    }, []);

    function handleResetForm(){
        setInitialAport('');
        setMonthlyAport('');
        setRentability('');
        setDeadline('');
        setYieldInput('bruto');
        setIndexTypeInput('pos');
        setIsFormFully(false);        
    }

    function handleOnErrors( value: string | number, name: string  ){
        if(value !=='' && !!isNaN(+value))
            setErrorsForm([...errorsForm, name]); 
        else if(!isNaN(+value)){
            const copyErrorsForm: string[] = errorsForm.filter((error: string) => name !== error);
            setErrorsForm(copyErrorsForm);
        }
    }

    useEffect(()=>{
        if( deadline && rentability && initialAport && monthlyAport ) setIsFormFully(true);
        else setIsFormFully(false)
    }, [deadline, rentability, initialAport, monthlyAport]);

    async function handleSearchSimulation (e: FormEvent) {
        e.preventDefault();
        try{
            await searchSimulation({ 
                tipoIndexacao: indexTypeInput,
                tipoRendimento: yieldInput,
            });                            
        } catch(e) {    
            toast.error('Erro ao buscar dados da simulação');
        }
    }

    return (
        <Container>
            <h2>Simulador</h2>
            <Form id="form-simulator" className="form-container" method="get" action="#" onSubmit={handleSearchSimulation}>
                <div className="yield">
                    <div className="yieldDiv">
                        <InfoYieldDiv>
                            Rendimento
                            <FiInfo size={16} />
                        </InfoYieldDiv>
                        <div className="form-group-radio">
                            <LabelOptions 
                                htmlFor="bruto"
                                isActive = { yieldInput === 'bruto' }
                            >   
                                { yieldInput === 'bruto' && <FiCheckSquare size={16}/>}
                                Bruto
                                <input 
                                    type="button" 
                                    id="bruto" 
                                    onClick={() => setYieldInput('bruto')}
                                />
                            </LabelOptions>
                            <div className="inner"></div>
                            <LabelOptions 
                                htmlFor="liquido"
                                isActive = { yieldInput === 'liquido' }
                            >
                                { yieldInput === 'liquido' && <FiCheckSquare size={16}/>}
                                Líquido
                                <input 
                                    type="button"
                                    id="liquido" 
                                    onClick={() => setYieldInput('liquido')}
                                />
                            </LabelOptions>
                        </div>
                    </div>

                    <div className="form-group">
                        <Label 
                            htmlFor="aport"
                            isWrong = {errorsForm.indexOf('aport') !== -1}
                        >
                            Aporte Inicial

                        </Label>
                        <span className="currency-input">
                            R$
                            <input 
                                type="text" 
                                name="aport" 
                                id="aport" 
                                value={initialAport} 
                                onChange={e =>{
                                    setInitialAport(e.target.value);
                                    handleOnErrors(e.target.value.replace('R$', "").replace(",", ""), 'aport'  );
                                } 
                                } 
                            />
                        </span>
                        <small style={{ color: '#ff0000aa' }}>
                        { 
                            (errorsForm.indexOf('aport') !== -1)
                            && 
                            'Aporte inicial deve ser um número!'
                        }
                        </small>
                        
                    </div>
                    <div className="form-group">
                        <Label 
                            htmlFor="aport"
                            isWrong = {errorsForm.indexOf('deadline') !== -1}
                        >
                            Prazo (em meses)
                        </Label>
                        <input 
                            type="text" 
                            name="deadline" 
                            id="deadline" 
                            value={deadline} 
                            onChange={e => {
                                setDeadline(e.target.value)
                                handleOnErrors( e.target.value, 'deadline'  );
                            }} 
                        />
                        <small style={{ color: '#ff0000aa' }}>
                        { 
                            (errorsForm.indexOf('deadline') !== -1)
                            && 
                            'Prazo deve ser um número!'
                        }
                        </small>
                    </div>
                    <div className="form-group">
                        <label 
                            htmlFor="aport"
                        >
                            IPCA (ao ano)
                        </label>
                        <input 
                            type="text" 
                            name="ipca" 
                            id="ipca" 
                            value={ipca}  
                            readOnly                           
                        />
                    </div>

                    <button 
                        type="reset" 
                        id="reset-simulator-form" 
                        onClick={handleResetForm}
                    >
                        Limpar campos
                    </button>
                </div>
                <div className="index-type">
                    <div className="yieldDiv">
                        <InfoYieldDiv>
                            Tipos de Indexação
                            <FiInfo size={16} />
                        </InfoYieldDiv>
                        <div className="form-group-radio">
                            <LabelOptions 
                                htmlFor="pre"
                                isActive = { indexTypeInput === 'pre' }
                            >   
                                { indexTypeInput === 'pre' && <FiCheckSquare size={16}/>}
                                Pré
                                <input 
                                    type="button" 
                                    id="pre" 
                                    onClick={() => setIndexTypeInput('pre')}
                                />
                            </LabelOptions>
                            <div className="inner"></div>
                            <LabelOptions 
                                htmlFor="pos"
                                isActive = { indexTypeInput === 'pos' }
                            >
                                { indexTypeInput === 'pos' && <FiCheckSquare size={16}/>}
                                Pós
                                <input 
                                    type="button"
                                    id="pos" 
                                    onClick={() => setIndexTypeInput('pos')}
                                />
                            </LabelOptions>
                            <LabelOptions 
                                htmlFor="fixado"
                                isActive = { indexTypeInput === 'fixado' }
                            >
                                { indexTypeInput === 'fixado' && <FiCheckSquare size={16}/>}
                                Fixado
                                <input 
                                    type="button"
                                    id="fixado" 
                                    onClick={() => setIndexTypeInput('fixado')}
                                />
                            </LabelOptions>
                        </div>
                    </div>
                    <div className="form-group">
                        <Label 
                            htmlFor="monthlyAport"
                            isWrong = { (errorsForm.indexOf('monthlyAport') !== -1) }
                        >
                            Aporte Mensal
                        </Label>
                        <span className="currency-input">
                            R$
                            <input 
                                type="text" 
                                name="monthlyAport" 
                                id="monthlyAport" 
                                value={monthlyAport} 
                                onChange={e =>{ 
                                    setMonthlyAport(e.target.value);
                                    handleOnErrors( e.target.value, 'monthlyAport'  );
                                }} 
                            />                        
                        </span>
                        <small style={{ color: '#ff0000' }}>
                        { 
                            (errorsForm.indexOf('monthlyAport') !== -1)
                            && 
                            'Aporte mensal deve ser um número!'
                        }
                        </small> 
                    </div>
                    <div className="form-group">
                        <Label 
                            htmlFor="rentability"
                            isWrong = {errorsForm.indexOf('rentability') !== -1}
                        >
                            Rentabilidade
                        </Label>
                        <input 
                            type="text" 
                            name="rentability" 
                            id="rentability" 
                            value={rentability} 
                            onChange={e => {
                                

                                setRentability( e.target.value );
                                handleOnErrors( e.target.value.replace("%", ""), 'rentability'  );
                            }} 
                        />
                        <small style={{ color: '#ff0000aa' }}>
                        { 
                            (errorsForm.indexOf('rentability') !== -1)
                            && 
                            'Rentabilidade deve ser um número!'
                        }
                        </small> 
                    </div>
                    <div className="form-group">
                        <label 
                            htmlFor="cdi"
                        >
                            CDI(ao ano)
                        </label>
                        <input 
                            type="text" 
                            name="cdi" 
                            id="cdi" 
                            value={cdi} 
                            readOnly 
                        />
                    </div>
                    <ButtonSubmit 
                        type="submit" 
                        id="submit-simulator-form" 
                        isValidate = { isFormFully === true && errorsForm.length <= 0 }
                        disabled = { isFormFully !== true || errorsForm.length > 0 }
                    >
                        Simular
                    </ButtonSubmit>
                    <button 
                        type="reset" 
                        id="reset-simulator-form-mobile" 
                        onClick={handleResetForm}
                    >
                        Limpar campos
                    </button>
                </div>
                
            </Form>
        </Container>
    );
}