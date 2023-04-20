import React from "react";
import { CDBAccordion, CDBContainer } from "cdbreact";
import { Container, Col, Row } from "react-bootstrap";

const FAQs = () => {
  const data = [
    {
      title: "¿Qué tipo de seguimiento se realiza después de la adopción?",
      content: `Al ser una organización sin fines de lucro, no podemos hacer seguimiento ni responsabilizarnos del estado de la mascota (Lee los Terminos y Condiciones). Te recomendamos que al momento de la adopción exigas el estado de la mascota (si es posble: tarjeta de vacunas, tarjeta de estirilización, tratamientos, etc...) para tener un plan de los costos futuros por el cuidado de la salud de la mascota.`,
    },
    {
      title: "¿Qué debo hacer si tengo problemas con mi animal adoptado?",
      content: `Ponte en contacto con la persona que lo puso en adopción, comentale sobre el problema que estas teniendo. Si esa persona no se puede hacer responsable intenta buscar instituciones que te puedan ayudar con tu mascota como FUNAPA`,
    },
    {
      title: "¿Cómo puedo hacer una donación para ayudar a su organización?",
      content: `Considera hacer donaciones a intituciones que se encarguen a el refugio y cuidado de animales como FUNAPA,  Refugio Amor y Abrigo (SPS), Arca HN (TGU), ASA Rescatistas de Animales (La Ceiba), Corazon Canino SRC (Santa Rosa de Copan), Mascotas en Adopción HN (SPS). En caso de que quieras donar a Recate Animal Honduras encontraras los enlaces de donaciones en el pie de página como "Donaciones"`,
    },
  ];

  const data2 = [
    {
      title: "Accordion 4",
      content: ` nibh, sollicitudin fringilla ante placerat eget. In in vulputate neque. Mputate tellus ut sodales interdum. Nam non diam aliquam, iaculis enim vitae, imperdiet eros. Praesent lacinia pretium ante, quis rhon Donec sed lectus diam. Quisque a vehicula tortor, at viverra quam. Vecus ex auris eu tortor in est porttitor efficiturFusce sit amet purus id lacCurabitur posuere ligulaus rutrum dapibus. Fusce et dictum nisi, in vs lacus. Nam sit amet mauris ut sapien varius tincidunt in in velit.stibolutpat leo. in vel risus. Aliquam dignissim lectus sit amet odio malesuada eleifend. Quisque ligula erat, vestibulum vel massa nec, lobortis convalliulum posuere sem eu erat egestas, ut tempor sem ultrices. Curabitur vulaliquam vitae. Maecenas et eros nec leo ultrices rhoncus eget ac odio.`,
    },
    {
      title: "Accordion 5",
      content: ` nibh, sollicitudin fringilla ante placerat eget. In in vulputate neque. Mputate tellus ut sodales interdum. Nam non diam aliquam, iaculis enim vitae, imperdiet eros. Praesent lacinia pretium ante, quis rhon Donec sed lectus diam. Quisque a vehicula tortor, at viverra quam. Vecus ex auris eu tortor in est porttitor efficiturFusce sit amet purus id lacCurabitur posuere ligulaus rutrum dapibus. Fusce et dictum nisi, in vs lacus. Nam sit amet mauris ut sapien varius tincidunt in in velit.stibolutpat leo. in vel risus. Aliquam dignissim lectus sit amet odio malesuada eleifend. Quisque ligula erat, vestibulum vel massa nec, lobortis convalliulum posuere sem eu erat egestas, ut tempor sem ultrices. Curabitur vulaliquam vitae. Maecenas et eros nec leo ultrices rhoncus eget ac odio.`,
    },
  ];
  return (
    <>
      <Container>
        <h1>Preguntas Frecuentes</h1>
        <Row xs={1} lg={2} style={{ paddingBottom: 50 }}>
          <Col>
            <CDBContainer>
              <CDBAccordion data={data} />
            </CDBContainer>
          </Col>
          <Col>
            <CDBContainer>
              <CDBAccordion data={data2} />
            </CDBContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FAQs;
