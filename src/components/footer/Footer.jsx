import React, { useEffect } from 'react';
import s from '../footer/footer.module.scss';

export default function Footer() {
  useEffect(() => {
    // Define o ano atual no elemento com id "currentYear"
    document.getElementById('currentYear').textContent = new Date().getFullYear();
  }, []);

  return (
    <section className={s.Footer}>
      <p> &copy; <span id="currentYear"></span> A Karyne Guinyver. Todos os direitos reservados.</p>
    </section>
  );
}
