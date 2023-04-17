import React, { useState } from "react";
import { CDBStepper, CDBStep } from "cdbreact";
import Container from "react-bootstrap/Container";
export const GiveInStepper = () => {
  const [active, setActive] = useState(1);

  const handleNextPrevClick = (a) => {
    setActive(a);
  };
  return (
    <Container>
      <CDBStepper direction="vertical" showTitle={false} showTooltip={false}>
        <CDBStep
          id={1}
          name="Crea una cuenta e inicia sesión"
          handleClick={() => handleNextPrevClick(1)}
          active={active}
          component={<Step1 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={2}
          name="LLena el formulario de dar en adopción"
          handleClick={() => handleNextPrevClick(2)}
          active={active}
          component={<Step2 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={3}
          name="Acepta los Términos y Condiciones"
          handleClick={() => handleNextPrevClick(3)}
          active={active}
          component={<Step3 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={4}
          name="Encuentrate con el interesado en adoptar la mascota"
          handleClick={() => handleNextPrevClick(4)}
          active={active}
          component={<Step4 handleNextPrevClick={handleNextPrevClick} />}
        />
        <CDBStep
          id={5}
          name="Reporte como le fue en la cita"
          handleClick={() => handleNextPrevClick(5)}
          active={active}
          component={<Step5 handleNextPrevClick={handleNextPrevClick} />}
        />
      </CDBStepper>
    </Container>
  );
};

const Step1 = () => {
  return (
    <>
      <h4>Crear Cuenta</h4>
      <ul>
        <li>Ve al formulario de para registrarte como un nuevo usuario</li>
        <li>Seleccione tipo de cuenta "Dar en adopción"</li>
        <li>Después de verificar tu usuario, inicia sesión</li>
      </ul>
    </>
  );
};

const Step2 = () => {
  return (
    <>
      <h4>Llene el formulario de adopción</h4>
      <p>
        Una vez seleccionada la mascota de su interés, llene el formulario de
        adopción en donde indica el espacio en donde tendrá la mascota, si tiene
        otras mascotas, y el compromiso con el buen cuidado de la mascota.
      </p>
    </>
  );
};

const Step3 = () => {
  return (
    <>
      <h4>Acepte los Términos y Condiciones</h4>
      <p>
        Lea detenidamente los términos y condiciones del uso de la plataforma y
        acepte sus condiciones. El dueño de la mascota revisara su formulario y
        se pondrá en contacto en caso de que le parezca su información.
      </p>
    </>
  );
};

const Step4 = () => {
  return (
    <>
      <h4>Encuentrese con el dueño de la mascota</h4>
      <p>
        Definan un lugar de comun acuerdo para poder recibir la mascota, de
        preferencia un lugar publico como centros comerciales y plazas donde se
        garantice su seguridad y la del dueño. Determine si la mascota es la que
        fue anunciada en el sitio web.
      </p>
    </>
  );
};

const Step5 = () => {
  return (
    <>
      <h4>Reporte como le fue en la cita</h4>
      <p>
        Reporte en caso de haber recibido exitosamente su nueva mascota, o en
        caso de que no se haya completado la reunión o cualquier anomalía.
      </p>
    </>
  );
};
