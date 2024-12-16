
import fotoInicio from '../../assets/Fotos/fotoInicio.jpg'


import s from '../inicio/inicio.module.scss'
export default function Inicio(){
    return(
        <main>
            
            <img className={s.fotoInicio} src={fotoInicio} alt="" />
            <section className={s.Inicio} >
                <h2>FUTUROS DESTINOS</h2>
            </section>
       
           

        </main>
        
    )
}