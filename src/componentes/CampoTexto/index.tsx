import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({ aoAlterado, label, placeholder, valor, obrigatorio = false, tipo = 'text' }: CampoTextoProps) => {               // se ninguem passar um valor para obrigatorio, ele é false por padrao

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado}                   // coloca {evento => aoDigitado}, passa o dedo em cima e saberemos o time de evento para colocar 
                required={obrigatorio} 
                placeholder={placeholderModificada}
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto