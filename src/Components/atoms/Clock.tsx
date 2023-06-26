import { useState, useEffect } from 'react';

function Reloj() {
  const [hora, setHora] = useState('');
  const formatoDosDigitos = (numero: number) => (numero < 10 ? `0${numero}` : numero);
  useEffect(() => {
    const intervalo = setInterval(() => {
      const fechaActual = new Date();
      const horas = formatoDosDigitos(fechaActual.getHours());
      const minutos = formatoDosDigitos(fechaActual.getMinutes());
      const segundos = formatoDosDigitos(fechaActual.getSeconds());
      const horaFormateada = `${horas}:${minutos}:${segundos}`;
      setHora(horaFormateada);
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div className="clock-container">
      <p className="clock">{hora}</p>
    </div>
  );
}

export default Reloj;
