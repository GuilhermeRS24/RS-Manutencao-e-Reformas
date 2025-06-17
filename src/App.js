import logo from './assets/logo.png';
import menuhamburguer from './assets/menuhamburguer.png';
import {Container, Header, Main, Paragrafo} from './styles';
import './global';

function App() {
  const clickMenu = () => {
    window.scroll({top: 0, behavior: 'smooth'})
  }
  return (
    <div className="App">
      <Container>
        <button onClick={clickMenu} style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 15px",
        backgroundColor: "#407c54",
        color: "white",
        border: 'none',
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      ↑ Início
    </button>
        <Header>
          <img src={logo} className="Rs-logo" alt="logo" style={{
            margin: '0 0 0 30px',
            width: '10%',
            height: '100%',
            objectFit: 'cover'
          }}/>
          <div style={{display:'flex',flexDirection: 'column', justifyContent:'flex-end'}}>
            <h style={{ fontSize: '35px', margin:'25px 0px' }}>RS Manuntenção e Reformas</h>

            <p style={{margin:'0 50px 15px 0'}}>Contatos: (45) 1369-1218  | Email: rs.construções@gmail.com | Instagram: @RS_ManuntençãoReformas </p>  
          </div>
           <img src={menuhamburguer} className='menuhamburguer' alt='menu' style={{
              width:'4%',
              height: '40%',
              objectFit: 'cover'
            }}/>
        </Header>
        <h1>Trabalhamos com:</h1>
        <div style={{width:'70%',height: '10vh',display:'flex', justifyContent: 'space-evenly',alignItems: 'center'}}>
            <a href='#alvenaria'>Alvenaria</a>
            <a href='#eletrica'>Elétrica</a>
            <a href='#encanamento'>Encanamento</a>
            <a href='#drywall'>Drywall</a>
            <a href='#ar-condicionado'>Ar-Condicionado</a>
        </div>
        
        <div style={{padding:'50px'}}>
        <h style={{fontSize:'35px'}}>RS Manuntenção e Reformas</h>

        <Paragrafo>&nbsp; Na RS Manuntenção e Reformas, trabalhamos com projetos em diferentes tipos de imóveis, sempre buscando oferecer soluções práticas e eficientes para nossos clientes. Atendemos tanto residências quanto prédios e comércios, adaptando nossos serviços às necessidades de cada tipo de espaço.
        </Paragrafo>
            
        <h1>Casas:</h1>
        <Paragrafo>
        - Nossa equipe está preparada para realizar reformas, manutenções e até construções, sempre focando em melhorar o conforto e a funcionalidade do ambiente, com o cuidado de respeitar as preferências de quem mora no local.
        </Paragrafo>

        <h1>Prédios:</h1>
        <Paragrafo>
        - Oferecemos serviços de manutenção, reformas e adaptações para condomínios ou empreendimentos maiores. Nosso objetivo é entregar resultados que garantam segurança e qualidade, com respeito aos prazos e orçamentos.
        </Paragrafo>

        <h1>Comércio:</h1>
        <Paragrafo>
        - Sabemos da importância de um ambiente bem estruturado para os negócios. Trabalhamos em reformas e adequações de espaços comerciais, sempre buscando otimizar a funcionalidade e criar um ambiente que atenda às necessidades dos nossos clientes e de seus consumidores.
        </Paragrafo>

        <Paragrafo>     
        &nbsp;Nossa empresa se dedica a entregar um serviço de qualidade, com atenção ao detalhe e sempre dentro do que foi combinado. Estamos prontos para ajudar em qualquer tipo de obra, seja em casa, em prédios ou no comércio.
        </Paragrafo>
        </div>

        <section id="alvenaria" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Alvenaria</h>
          <Main>



          </Main>
        </section>

        <section id="eletrica" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Elétrica</h>
          <Main>



          </Main>
        </section>

        <section id="encanamento" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Encanamento</h>
          <Main>



          </Main>
        </section>

        <section id="drywall" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Drywall</h>
          <Main>



          </Main>
        </section>

        <section id="ar-condicionado" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Ar-Condicionado</h>
          <Main>



          </Main>
        </section>

      </Container>
    </div>
  );
}

export default App;
