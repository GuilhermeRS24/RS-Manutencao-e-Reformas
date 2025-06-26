import images from './images';
import {Container, Header, Main, Paragrafo, Footer} from './styles';
import './global';

function App() {

  const clickMenu = () => {
    window.scroll({top: 0, behavior: 'smooth'})
  }

  const icon = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  }

  return (
    <div className="App">
      <Container>
        <button onClick={clickMenu} style={{//Botão para Retornar ao inicio da pagina.
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 15px",
        backgroundColor: "#00008b",
        color: "white",
        border: 'none',
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      ↑ Início
    </button>
        <Header>
          <img src={images.logo} className="Rs-logo" alt="logo" style={{//Logo da RS
            margin: '0 0 0 30px',
            width: '10%',
            height: '100%',
            objectFit: 'cover'
          }}/>
          <div style={{display:'flex',flexDirection: 'column', justifyContent:'flex-end'}}>
            <h style={{ fontSize: '35px', margin:'25px 0px' }}>RS Manuntenção e Reformas</h>

            <div style={{margin:'0 50px 15px 0', display:'flex',flexDirection: 'row'}}>
              <p>Contatos:&nbsp;</p>
               <p>
                   41 9890-4364
              </p>
              <p>&nbsp;| Email: rs.ManuntençãoReformas | Instagram: @RS_ManuntençãoReformas</p>
            </div>  
          </div>
           
            <a href="https://wa.me/5547999746021?text=Olá" target="_blank" rel="noopener noreferrer">
                <img src={images.menuhamburguer} className='menuhamburguer' alt='menu' style={{
              width:'100%',
              height: '40%',
              objectFit: 'cover'
            }}/>
              </a>
        </Header>
        <h1 style={{fontSize:'28px',margin:'15px'}}>Trabalhamos com:</h1>
        <div //icon
         style={{width:'80%',height: '30vh',display:'flex', justifyContent: 'space-evenly',alignItems: 'center',backgroundColor:'#00008b',color:'#f6f6f6',borderRadius:'15px'}}>  

            <a href='#alvenaria' style={icon}>
              <img src={images.alvenaria_icon} />Alvenaria</a>
            
            <a href='#eletrica' style={icon}>
              <img src={images.eletricidade_icon} />Elétrica
            </a>

            <a href='#encanamento' style={icon}>
              <img src={images.encanamento_icon} />Encanamento
            </a>

            <a href='#drywall' style={icon}>
              <img src={images.drywall_icon} />Drywall
            </a>

            <a href='#ar-condicionado' style={icon}>
              <img src={images.ar_icon} />Ar-Condicionado
            </a>

            <a href='#reparos' style={icon}>
              <img src={images.reparos_icon} />Reparos em geral
            </a>
        </div>
        <div style={{margin:'70px 0 0 0',display:'flex',alignItems:'center',flexDirection:'column'}}>
          <h1 style={{fontSize:'38px'}}>Precisando de ajuda com a reforma de sua residência?</h1>
        <h1 style={{fontSize:'38px', color:'#00008b'}}>Chama que eu resolvo</h1>
        </div>
        <a href="https://wa.me/5547999746021?text=Estou interessado na Alvenaria" target="_blank" rel="noopener noreferrer"
            style={{margin:'40px',width:'400px',height:'50px' , fontSize:'34px', backgroundColor:'#ffd426', color:'#00008b', borderRadius:'5px',boxShadow:'inset 0 0 0 2px #1c4c32', display:'flex',alignItems:'center',justifyContent:'center'}}>
            Entrar em contato
        </a>
        
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
      
        <section id="alvenaria" className="relative h-64 bg-gray-100" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Alvenaria</h>
          <Main>
            <h style={{fontSize:'34px',margin:'20px'}}>Trabalhamos com:
            </h>
            <h1>Construção de Paredes</h1>
            <ul>
              <li>Levantamento de paredes internas e externas</li>
              <li>Divisórias em tijolos cerâmicos ou blocos de concreto</li>
              <li>Impermeabilização de paredes</li>
            </ul>

            <h1>Reboco e Chapisco</h1>
            <ul>
              <li>Chapisco: aplicação de camada áspera para aderência</li>
              <li>Emboço: camada intermediária de regularização </li>
              <li>Reboco: acabamento final antes da pintura</li>
            </ul>

            <h1>Assentamento de Pisos e Revestimentos</h1>
            <ul>
              <li>Instalação de pisos cerâmicos, porcelanatos, lajotas etc.</li>
              <li>Impermeabilização de pisos, paredes e lajes</li>
            </ul>

            <h1>Aberturas e Fechamentos</h1>
            <ul>
              <li>Abertura de vãos para portas e janelas</li>
              <li>Fechamento de ambientes ou salas</li>
            </ul>

            <h1>Reformas e Manutenções</h1>
            <ul>
              <li>Reparo em paredes com trincas ou infiltrações</li>
              <li>impermibilizaçãode pisos paredes e lajes</li>
            </ul>
            
            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Alvenaria" target="_blank" rel="noopener noreferrer"
            style={{margin:'50px 0 0 0' ,width:'35%',height:'8%' , fontSize:'34px', backgroundColor:'#f6f6f6', color:'#000000', borderRadius:'5px',boxShadow:'inset 0 0 0 2px #000000', display:'flex',alignItems:'center',justifyContent:'center'}}>
             Solicitar orçamento
            </a>


          </Main>
        </section>

        <section id="eletrica" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Elétrica</h>
          <Main>
            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Elétrica" target="_blank" rel="noopener noreferrer"
            style={{margin:'50px 0 0 0' ,width:'35%',height:'8%' , fontSize:'34px', backgroundColor:'#f6f6f6', color:'#000000', borderRadius:'5px',boxShadow:'inset 0 0 0 2px #000000', display:'flex',alignItems:'center',justifyContent:'center'}}>
             Solicitar orçamento
            </a>


          </Main>
        </section>

        <section id="encanamento" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Encanamento</h>
          <Main>
            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Encanamento" target="_blank" rel="noopener noreferrer"
            style={{margin:'50px 0 0 0' ,width:'35%',height:'8%' , fontSize:'34px', backgroundColor:'#f6f6f6', color:'#000000', borderRadius:'5px',boxShadow:'inset 0 0 0 2px #000000', display:'flex',alignItems:'center',justifyContent:'center'}}>
             Solicitar orçamento
            </a>


          </Main>
        </section>

        <section id="drywall" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Drywall</h>
          <Main>
            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Drywall" target="_blank" rel="noopener noreferrer"
            style={{margin:'50px 0 0 0' ,width:'35%',height:'8%' , fontSize:'34px', backgroundColor:'#f6f6f6', color:'#000000', borderRadius:'5px',boxShadow:'inset 0 0 0 2px #000000', display:'flex',alignItems:'center',justifyContent:'center'}}>
             Solicitar orçamento
            </a>


          </Main>
        </section>

        <section id="ar-condicionado" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Ar-Condicionado</h>
          <Main>
            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Ar-Condicionado" target="_blank" rel="noopener noreferrer"
            style={{margin:'50px 0 0 0' ,width:'35%',height:'8%' , fontSize:'34px', backgroundColor:'#f6f6f6', color:'#000000', borderRadius:'5px',boxShadow:'inset 0 0 0 2px #000000', display:'flex',alignItems:'center',justifyContent:'center'}}>
             Solicitar orçamento
            </a>


          </Main>
        </section>

        <section id="reparos" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Reparos em Geral</h>
          <Main>
            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre reparos em geral" target="_blank" rel="noopener noreferrer"
            style={{margin:'50px 0 0 0' ,width:'35%',height:'8%' , fontSize:'34px', backgroundColor:'#f6f6f6', color:'#000000', borderRadius:'5px',boxShadow:'inset 0 0 0 2px #000000', display:'flex',alignItems:'center',justifyContent:'center'}}>
             Solicitar orçamento
            </a>


          </Main>
        </section>
        <Footer>
          <img src={images.logo} className="Rs-logo" alt="logo" style={{//Logo da RS
            margin: '0 0 0 30px',
            width: '80px',
            height: '80px',
            objectFit: 'cover'
          }}/>
            <div>
              
              <h1>
                Contatos:
              </h1>
              <a href="https://wa.me/5547999746021?text=Olá" target="_blank" rel="noopener noreferrer">
                <img src={images.whatsapp}/>
              </a>
              <a href='https://www.facebook.com/cleciorenators?locale=pt_BR' target='_blank' rel="noopener noreferrer">
                <img src={images.facebook}/>
              </a>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <h1>Serviços</h1>
              <ul>
            <a href='#alvenaria' style={icon}>Alvenaria</a>
            
            <a href='#eletrica' style={icon}>Elétrica</a>

            <a href='#encanamento' style={icon}>Encanamento</a>

            <a href='#drywall' style={icon}>Drywall</a>

            <a href='#ar-condicionado' style={icon}>Ar-Condicionado</a>
              </ul>
            </div>
        </Footer>
      </Container>
    </div>
  );
}

export default App;
