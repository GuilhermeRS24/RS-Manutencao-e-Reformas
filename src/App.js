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

  const lista = {
    margin:'20px'
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
            <ul style={lista}>
              <li>Levantamento de paredes internas e externas</li>
              <li>Divisórias em tijolos cerâmicos ou blocos de concreto</li>
              <li>Impermeabilização de paredes</li>
            </ul>

            <h1>Reboco e Chapisco</h1>
            <ul style={lista}>
              <li>Chapisco: aplicação de camada áspera para aderência</li>
              <li>Emboço: camada intermediária de regularização </li>
              <li>Reboco: acabamento final antes da pintura</li>
            </ul>

            <h1>Assentamento de Pisos e Revestimentos</h1>
            <ul style={lista}>
              <li>Instalação de pisos cerâmicos, porcelanatos, lajotas etc.</li>
              <li>Impermeabilização de pisos, paredes e lajes</li>
            </ul>

            <h1>Aberturas e Fechamentos</h1>
            <ul style={lista}>
              <li>Abertura de vãos para portas e janelas</li>
              <li>Fechamento de ambientes ou salas</li>
            </ul>

            <h1>Reformas e Manutenções</h1>
            <ul style={lista}>
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
            <h style={{fontSize:'34px',margin:'20px'}}>Trabalhamos com:
            </h>
            <h1>Planejamento Elétrico</h1>
            <ul style={lista}>
              <li>Leitura e interpretação de projetos elétricos</li>
              <li>Definição de carga elétrica da residência ou prédio</li>
              <li>Escolha dos materiais adequados (bitolas de fios, disjuntores, conduítes)</li>
            </ul>

            <h1>Infraestrutura</h1>
            <ul style={lista}>
              <li>Corte e abertura de canaletas em paredes e lajes para embutir conduítes</li>
              <li>Instalação de eletrodutos (conduítes) e caixas de passagem e de tomadas</li>
              <li>Passagem de cabos e fios elétricos</li>
            </ul>

            <h1>Instalação de componentes</h1>
            <ul style={lista}>
              <li>Tomadas</li>
              <li>Interruptores</li>
              <li>Luminárias</li>
              <li>Ventiladores de teto</li>
              <li>Quadros de distribuição (quadro de disjuntores)</li>
            </ul>

            <h1>Proteção e segurança</h1>
            <ul style={lista}>
              <li>Instalação de disjuntores e DPS (dispositivo de proteção contra surtos)</li>
              <li>Ligação do fio terra (aterramento)</li>
              <li>Instalação de DR (diferencial residual) para proteção contra choques</li>
            </ul>

            <h1>Iluminação</h1>
            <ul style={lista}>
              <li>Distribuição de pontos de luz no projeto</li>
              <li>Instalação de luminárias internas e externas</li>
              <li>Configuração de sistemas com sensor de presença, dimerização, etc.</li>
            </ul>
            
            <h1>Testes e manutenção</h1>
            <ul style={lista}>
              <li>Testes de:
                <ul style={{margin:'10px'}}>
                  <li>Continuidade elétrica</li>
                  <li>Isolamento dos cabos</li>
                  <li>Funcionamento dos circuitos</li>
                </ul>
              </li>
              <li>Correção de curto-circuitos e sobrecargas</li>
              <li>Revisão de instalações</li>
            </ul>

            <h1>Ligação à rede pública</h1>
            <ul style={lista}>
              <li>Preparação do padrão de entrada de energia</li>
              <li>Instalação de medidor de energia (em parceria com a concessionária)</li>
              <li>Solicitação de vistoria e ligação oficial</li>
            </ul>
            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Elétrica" target="_blank" rel="noopener noreferrer"
            style={{margin:'50px 0 0 0' ,width:'35%',height:'8%' , fontSize:'34px', backgroundColor:'#f6f6f6', color:'#000000', borderRadius:'5px',boxShadow:'inset 0 0 0 2px #000000', display:'flex',alignItems:'center',justifyContent:'center'}}>
             Solicitar orçamento
            </a>


          </Main>
        </section>

        <section id="encanamento" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Encanamento</h>
          <Main>
            <h style={{fontSize:'34px',margin:'20px'}}>Trabalhamos com:</h>

            <h1>Planejamento hidráulico</h1>
            <ul style={lista}>
              <li>Leitura de plantas hidráulicas</li>
              <li>Planejamento de pressão e fluxo de água</li>
              <li>Definição de:
                <ul style={{margin:'10px'}}>
                  <li>Pontos de consumo (chuveiro, torneira, caixa acoplada, etc.)</li>
                  <li>Diâmetro e tipo de tubulação (PVC, PEX, CPVC, cobre)</li>
                </ul>
              </li>
            </ul>

            <h1>Instalação de água fria</h1>
            <ul style={lista}>
              <li>Instalação de:
                <ul style={{margin:'10px'}}>
                  <li>Tubulações de entrada de água</li>
                  <li>Caixas d’água (com boia e registros)</li>
                  <li>Válvulas de retenção</li>
                </ul>
              </li>
              <li>Passagem de tubos de PVC ou PPR por paredes e pisos</li>
            </ul>

            <h1>Instalação de água quente (quando necessário)</h1>
            <ul style={lista}>
              <li>Instalação de:
                <ul style={{margin:'10px'}}>
                  <li>Tubulações específicas para água quente (CPVC, cobre ou PPR)</li>
                  <li>Misturadores e aquecedores (a gás ou elétricos)</li>
                </ul>
              </li>
              <li>Ligação com sistemas de aquecimento solar (se houver)</li>
            </ul>

            <h1>Instalações sanitárias</h1>
            <ul style={lista}>
              <li>Instalação de:
                <ul style={{margin: '10px'}}>
                  <li>Vasos sanitários</li>
                  <li>Caixas acopladas</li>
                  <li>Ralos, sifões e lavatórios</li>
                  <li>Pias e tanques</li>
                </ul>
              </li>
              <li>Conexão com a rede de esgoto e respiro</li>
            </ul>

            <h1>Rede de esgoto e águas pluviais</h1>
            <ul style={lista}>
              <li>Instalação de tubulações para:
                <ul style={{margin: '10px'}}>
                  <li>Esgoto sanitário</li>
                  <li>Águas pluviais (chuva)</li>
                </ul>
              </li>
              <li>Caimento correto para evitar entupimentos</li>
              <li>Ligação a fossa séptica, sumidouro ou rede pública</li>
            </ul>

            <h1>Testes e vedação</h1>
            <ul style={lista}>
              <li>Teste de estanqueidade (para verificar vazamentos)</li>
              <li>Verificação de pressão da água</li>
              <li>Vistoria da vedação de conexões</li>
            </ul>

            <h1>Manutenção e ajustes</h1>
            <ul style={lista}>
              <li>Troca de:
                <ul style={{margin:'10px'}}>
                  <li>Registros, torneiras e válvulas</li>
                  <li>Canos danificados</li>
                </ul>
              </li>
              <li>Desentupimentos e limpeza de caixas de gordura</li>
            </ul>
            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Encanamento" target="_blank" rel="noopener noreferrer"
            style={{margin:'50px 0 0 0' ,width:'35%',height:'8%' , fontSize:'34px', backgroundColor:'#f6f6f6', color:'#000000', borderRadius:'5px',boxShadow:'inset 0 0 0 2px #000000', display:'flex',alignItems:'center',justifyContent:'center'}}>
             Solicitar orçamento
            </a>
          </Main>
        </section>

        <section id="drywall" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Drywall</h>
          <Main>
            <h style={{fontSize:'34px',margin:'20px'}}>Trabalhamos com:</h>

            <h1>Montagem da estrutura metálica</h1>
            <ul style={lista}>
              <li>Fixação de guias no piso e teto</li>
              <li>Colocação dos montantes verticais (geralmente a cada 40 ou 60 cm)</li>
              <li>Reforços estruturais para portas, janelas ou suportes de TV</li>
            </ul>

            <h1> Instalação das placas de gesso</h1>
            <ul style={lista}>
              <li>Parafusamento das placas nos perfis metálicos</li>
              <li>Cortes personalizados para tomadas, interruptores e tubulações</li>
              <li>Fechamento da primeira face, passagem da fiação hidráulica/elétrica, e então fechamento da segunda face</li>
            </ul>

            <h1>Tratamento de juntas</h1>
            <ul style={lista}>
              <li>Aplicação de fita de papel ou tela nas juntas</li>
              <li>Aplicação de massa para drywall (3 demãos normalmente)</li>
              <li>Lixamento para nivelar</li>
            </ul>

            <h1>Acabamento final</h1>
            <ul style={lista}>
              <li>Preparação para pintura ou revestimento</li>
              <li>Instalação de rodapés, sancas ou molduras (se necessário)</li>
            </ul>

            <h1>Forros de drywall</h1>
            <ul style={lista}>
              <li>Fixação de estrutura suspensa</li>
              <li>Placas para o teto</li>
              <li>Criação de rebaixos, sancas abertas/fechadas ou iluminação embutida</li>
            </ul>

            <h1> Manutenção e modificações</h1>
            <ul style={lista}>
              <li>Abertura para instalar ou acessar tubulação, fiação</li>
              <li>Reparo de trincas ou furos</li>
              <li>Substituição de placas danificadas</li>
            </ul>

            <h style={{fontSize:'32px'}}>Vantagens do Drywall:</h>
            <ul style={lista}>
              <li>Rápida instalação</li>
              <li>Menos entulho e sujeira</li>
              <li>Facilidade de manutenção</li>
              <li>Isolamento acústico (quando combinado com lã de rocha ou vidro)</li>
            </ul>

            <h style={{fontSize:'32px'}}>Cuidados:</h>
            <ul style={lista}>
              <li>Não pode ser usado em áreas externas ou com muita umidade, exceto com placas especiais (placa verde para áreas úmidas)</li>
              <li>Requer reforços internos para suportar peso (como armários suspensos)</li>
            </ul>

            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Drywall" target="_blank" rel="noopener noreferrer"
            style={{margin:'50px 0 0 0' ,width:'35%',height:'8%' , fontSize:'34px', backgroundColor:'#f6f6f6', color:'#000000', borderRadius:'5px',boxShadow:'inset 0 0 0 2px #000000', display:'flex',alignItems:'center',justifyContent:'center'}}>
             Solicitar orçamento
            </a>


          </Main>
        </section>

        <section id="ar-condicionado" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Ar-Condicionado</h>
          <Main>

            <h1>Planejamento</h1>
            <ul style={lista}>
              <li>Definir tipo e capacidade do equipamento (BTUs) conforme o tamanho e uso do ambiente</li>
              <li>Escolher a melhor posição para a unidade interna (evaporadora) e externa (condensadora)</li>
              <li>Verificar distância entre as unidades (quanto menor, melhor para eficiência)</li>
            </ul>

            <h1>Infraestrutura (feita durante a obra)</h1>
            <ul style={lista}>
              <li>Abertura de caminhos para tubulações na parede ou laje</li>
              <li>Instalação de:
                <ul style={{margin:'10px'}}>
                  <li>Tubo de cobre para refrigeração (líquido e gás)</li>
                  <li>Tubo dreno para saída da água da evaporadora</li>
                  <li>Cabo elétrico de interligação entre as unidades</li>
                  <li>Tomada exclusiva com disjuntor para o ar-condicionado</li>
                </ul>
              </li>
              <li>Em muitos casos, essas tubulações ficam embutidas no drywall ou na parede</li>
            </ul>

            <h1> Instalação do equipamento</h1>
            <ul style={lista}>
              <li>Fixação da evaporadora (interna) na parede ou teto</li>
              <li>Fixação da condensadora (externa) em base de concreto, suporte metálico ou piso</li>
              <li>Conexão das linhas de cobre, dreno e elétrica</li>
              <li>Vácuo nas tubulações com bomba de vácuo (para evitar umidade e garantir eficiência)</li>
            </ul>

            <h1>Testes e funcionamento</h1>
            <ul style={lista}>
              <li>Verificação de vazamentos com teste de pressão</li>
              <li>Teste de isolamento elétrico</li>
              <li>Liberação do gás refrigerante</li>
              <li>Ligação do equipamento e teste de operação (frio, ventilação, quente, se for inverter quente/frio)</li>
            </ul>

            <h1>Manutenção</h1>
            <ul style={lista}>
              <li>Limpeza de filtros regularmente</li>
              <li>Higienização da evaporadora</li>
              <li>Verificação de gás refrigerante (vazamentos ou recarga)</li>
              <li>Limpeza de dreno entupido</li>
              <li>Verificação de ruídos e vibrações anormais</li>
            </ul>

            <h style={{fontSize:'32px'}}> Cuidados importantes:</h>
            <ul style={lista}>
              <li>Não instalar evaporadora em cima de tomadas ou eletrônicos (por causa do dreno)</li>
              <li>Condensadora precisa de ventilação e acesso para manutenção</li>
              <li>Usar profissionais certificados, pois erros causam perda de eficiência ou danos</li>
            </ul>

            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Ar-Condicionado" target="_blank" rel="noopener noreferrer"
            style={{margin:'50px 0 0 0' ,width:'35%',height:'8%' , fontSize:'34px', backgroundColor:'#f6f6f6', color:'#000000', borderRadius:'5px',boxShadow:'inset 0 0 0 2px #000000', display:'flex',alignItems:'center',justifyContent:'center'}}>
             Solicitar orçamento
            </a>


          </Main>
        </section>

        <section id="reparos" style={{margin:'50px',display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h style={{ margin:'30px', fontSize:'50px' }}>Reparos em Geral</h>
          <Main>

            <h1></h1>
            <ul style={lista}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

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
