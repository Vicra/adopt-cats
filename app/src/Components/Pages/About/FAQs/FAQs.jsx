import React from "react";
import { CDBAccordion, CDBContainer } from "cdbreact";
import { Container, Col, Row } from "react-bootstrap";

const FAQs = () => {
  const data = [
    {
      title: "Accordion 1",
      content: ` nibh, sollicitudin fringilla ante placerat eget. In in vulputate neque. Mputate tellus ut sodales interdum. Nam non diam aliquam, iaculis enim vitae, imperdiet eros. Praesent lacinia pretium ante, quis rhon Donec sed lectus diam. Quisque a vehicula tortor, at viverra quam. Vecus ex auris eu tortor in est porttitor efficiturFusce sit amet purus id lacCurabitur posuere ligulaus rutrum dapibus. Fusce et dictum nisi, in vs lacus. Nam sit amet mauris ut sapien varius tincidunt in in velit.stibolutpat leo. in vel risus. Aliquam dignissim lectus sit amet odio malesuada eleifend. Quisque ligula erat, vestibulum vel massa nec, lobortis convalliulum posuere sem eu erat egestas, ut tempor sem ultrices. Curabitur vulaliquam vitae. Maecenas et eros nec leo ultrices rhoncus eget ac odio.`,
    },
    {
      title: "Accordion 2",
      content: ` nibh, sollicitudin fringilla ante placerat eget. In in vulputate neque. Mputate tellus ut sodales interdum. Nam non diam aliquam, iaculis enim vitae, imperdiet eros. Praesent lacinia pretium ante, quis rhon Donec sed lectus diam. Quisque a vehicula tortor, at viverra quam. Vecus ex auris eu tortor in est porttitor efficiturFusce sit amet purus id lacCurabitur posuere ligulaus rutrum dapibus. Fusce et dictum nisi, in vs lacus. Nam sit amet mauris ut sapien varius tincidunt in in velit.stibolutpat leo. in vel risus. Aliquam dignissim lectus sit amet odio malesuada eleifend. Quisque ligula erat, vestibulum vel massa nec, lobortis convalliulum posuere sem eu erat egestas, ut tempor sem ultrices. Curabitur vulaliquam vitae. Maecenas et eros nec leo ultrices rhoncus eget ac odio.`,
    },
    {
      title: "Accordion 3",
      content: ` nibh, sollicitudin fringilla ante placerat eget. In in vulputate neque. Mputate tellus ut sodales interdum. Nam non diam aliquam, iaculis enim vitae, imperdiet eros. Praesent lacinia pretium ante, quis rhon Donec sed lectus diam. Quisque a vehicula tortor, at viverra quam. Vecus ex auris eu tortor in est porttitor efficiturFusce sit amet purus id lacCurabitur posuere ligulaus rutrum dapibus. Fusce et dictum nisi, in vs lacus. Nam sit amet mauris ut sapien varius tincidunt in in velit.stibolutpat leo. in vel risus. Aliquam dignissim lectus sit amet odio malesuada eleifend. Quisque ligula erat, vestibulum vel massa nec, lobortis convalliulum posuere sem eu erat egestas, ut tempor sem ultrices. Curabitur vulaliquam vitae. Maecenas et eros nec leo ultrices rhoncus eget ac odio.`,
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
