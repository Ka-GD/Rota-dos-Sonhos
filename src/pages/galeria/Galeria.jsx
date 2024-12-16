import s from '../galeria/galeri.module.scss'
import tailandia from '../../assets/Fotos/fotoInicio.jpg'
import Palace from '../../assets/Fotos/Grand Palace.jpg'
import ft from '../../assets/Fotos/ft.jpg'
import mercado  from '../../assets/Fotos/mercado.jpg'
import akihabara from '../../assets/Fotos/akihabara.jpg'
import Gion from '../../assets/Fotos/Gion.jpg'
import Dotonbori from '../../assets/Fotos/Dotonbori.jpg'
import Gyeongbokgung from '../../assets/Fotos/Gyeongbokgung.jpg'
import Cachoeira from '../../assets/Fotos/Cachoeira.jpg'
import Anapji from '../../assets/Fotos/Anapji.jpg'
export default function Galeria(){
    return(
     
     <section className={s.Galeria}>
      
        <h2> Tailândia</h2>
        <section className={s.todasImagens}>
        <section className={s.image1}>
        <img src={mercado} alt="" />
        </section>
        <section className={s.image2}>
        <img src={Palace} alt="" />
        </section>
        <section className={s.image3}>
        <img src={ft} alt="" />
        
        </section>
       
        </section>
       
        <h2> Japão</h2>
        <section className={s.todasImagens}>
        <section className={s.image1}>
        <img src={akihabara} alt="" />
        </section>
        <section className={s.image2}>
        <img src={Gion} alt="" />
        </section>
        <section className={s.image3}>
        <img src={Dotonbori} alt="" />
        </section>
       
        </section>

        <h2> Coréia do Sul  </h2>
        <section className={s.todasImagens}>
        <section className={s.image1}>
        <img src={Gyeongbokgung} alt="" />
        </section>
        <section className={s.image2}>
        <img src={Cachoeira } alt="" />
        </section>
        <section className={s.image3}>
        <img src={Anapji} alt="" />
        </section>
       
        </section>
       
       
       
        
       
     </section>
       
    )
}