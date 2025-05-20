
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  useEffect(() => {
    // Carrossel de imagens
    const track = document.querySelector(`.${styles.carouselTrack}`) as HTMLElement;
    const slides = Array.from(document.querySelectorAll(`.${styles.carouselSlide}`));
    const nextButton = document.querySelector(`.${styles.carouselNext}`) as HTMLElement;
    const prevButton = document.querySelector(`.${styles.carouselPrev}`) as HTMLElement;
    
    if (!track || !slides.length || !nextButton || !prevButton) return;
    
    let currentIndex = 0;
    
    // Configura posição inicial
    const updateSlides = () => {
      slides.forEach((slide, index) => {
        const element = slide as HTMLElement;
        element.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
        element.style.position = 'absolute';
        element.style.transition = 'transform 0.5s ease';
        element.style.width = '100%';
      });
    };
    
    updateSlides();
    
    // Move para o slide anterior
    const moveToPrev = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides();
    };
    
    // Move para o próximo slide
    const moveToNext = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides();
    };
    
    // Adiciona event listeners aos botões
    nextButton.addEventListener('click', moveToNext);
    prevButton.addEventListener('click', moveToPrev);
    
    // Auto-play do carrossel
    const autoPlay = setInterval(moveToNext, 5000);
    
    // Limpa o intervalo quando o componente é desmontado
    return () => {
      clearInterval(autoPlay);
      nextButton.removeEventListener('click', moveToNext);
      prevButton.removeEventListener('click', moveToPrev);
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>TechSolutions - Consultoria em Software, IA e Automação</title>
        <meta name="description" content="Consultoria especializada em desenvolvimento de software, gestão de IAs e automações para potencializar seu negócio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>TechSolutions</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#contato">Contato</a>
          <a href="#" className={styles.cta}>Agendar Consulta</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Transforme seu negócio com soluções tecnológicas inteligentes</h1>
            <p>Desenvolvimento de software personalizado, gestão de IAs e automação de processos para impulsionar sua empresa ao próximo nível</p>
            <div className={styles.heroCta}>
              <a href="#contato" className={styles.primaryBtn}>Fale Conosco</a>
              <a href="#servicos" className={styles.secondaryBtn}>Nossos Serviços</a>
            </div>
          </div>
        </section>

        <section id="servicos" className={styles.services}>
          <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>💻</div>
              <h3>Desenvolvimento de Software</h3>
              <p>Criamos soluções personalizadas que atendem às necessidades específicas do seu negócio, desde aplicativos web até sistemas empresariais completos.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🤖</div>
              <h3>Gestão de IAs</h3>
              <p>Implementamos e gerenciamos soluções de inteligência artificial para otimizar seus processos e gerar insights valiosos para tomada de decisões.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚙️</div>
              <h3>Automação de Processos</h3>
              <p>Automatizamos fluxos de trabalho repetitivos, liberando sua equipe para focar em atividades estratégicas e aumentando a produtividade.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📊</div>
              <h3>Análise de Dados</h3>
              <p>Transformamos dados em informações acionáveis com dashboards personalizados e relatórios inteligentes para impulsionar seu negócio.</p>
            </div>
          </div>
        </section>

        <section id="carousel" className={styles.carousel}>
          <h2 className={styles.sectionTitle}>Nossas Soluções</h2>
          <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
              <div className={styles.carouselSlide}>
                <img src="/images/software-dev-1.jpg" alt="Desenvolvimento de Software" />
                <div className={styles.carouselCaption}>Desenvolvimento de Software</div>
              </div>
              <div className={styles.carouselSlide}>
                <img src="/images/ai-1.jpg" alt="Inteligência Artificial" />
                <div className={styles.carouselCaption}>Inteligência Artificial</div>
              </div>
              <div className={styles.carouselSlide}>
                <img src="/images/automation-1.jpg" alt="Automação de Processos" />
                <div className={styles.carouselCaption}>Automação de Processos</div>
              </div>
              <div className={styles.carouselSlide}>
                <img src="/images/code-1.jpg" alt="Desenvolvimento de Código" />
                <div className={styles.carouselCaption}>Soluções Personalizadas</div>
              </div>
              <div className={styles.carouselSlide}>
                <img src="/images/tech-1.jpg" alt="Tecnologia" />
                <div className={styles.carouselCaption}>Consultoria Técnica</div>
              </div>
            </div>
            <button className={styles.carouselPrev}>&lt;</button>
            <button className={styles.carouselNext}>&gt;</button>
          </div>
        </section>

        <section id="sobre" className={styles.about}>
          <h2 className={styles.sectionTitle}>Sobre Nós</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>A TechSolutions é uma consultoria especializada em desenvolvimento de software, gestão de IAs e automação de processos. Com uma equipe de profissionais altamente qualificados, estamos comprometidos em entregar soluções tecnológicas inovadoras que transformam negócios.</p>
              <p>Nossa abordagem combina expertise técnica com visão estratégica, proporcionando resultados mensuráveis e sustentáveis para nossos clientes.</p>
            </div>
          </div>
        </section>

        <section id="diferenciais" className={styles.differentials}>
          <h2 className={styles.sectionTitle}>Nossos Diferenciais</h2>
          <div className={styles.differentialsList}>
            <div className={styles.differentialItem}>
              <h3>Soluções Personalizadas</h3>
              <p>Desenvolvemos soluções sob medida para atender às necessidades específicas do seu negócio.</p>
            </div>
            <div className={styles.differentialItem}>
              <h3>Equipe Especializada</h3>
              <p>Contamos com profissionais certificados e experientes em diversas tecnologias e metodologias.</p>
            </div>
            <div className={styles.differentialItem}>
              <h3>Metodologia Ágil</h3>
              <p>Trabalhamos com metodologias ágeis para garantir entregas rápidas e de alta qualidade.</p>
            </div>
            <div className={styles.differentialItem}>
              <h3>Suporte Contínuo</h3>
              <p>Oferecemos suporte técnico especializado para garantir o bom funcionamento das soluções implementadas.</p>
            </div>
          </div>
        </section>

        <section id="contato" className={styles.contact}>
          <h2 className={styles.sectionTitle}>Entre em Contato</h2>
          <div className={styles.contactContainer}>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Seu email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" placeholder="Seu telefone" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" placeholder="Como podemos ajudar?" required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Enviar Mensagem</button>
            </form>
            <div className={styles.contactInfo}>
              <h3>Outras formas de contato</h3>
              <p><strong>Email:</strong> contato@techsolutions.com.br</p>
              <p><strong>Telefone:</strong> (11) 9999-9999</p>
              <p><strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 TechSolutions. Todos os direitos reservados.</p>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
