
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useTheme } from "../context/ThemeContext";

const Home: NextPage = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`${styles.container} ${theme}`}>
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
          <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Consultoria+TechSolutions&details=Agendar+reunião+para+discutir+serviços+de+consultoria&location=Online&add=rodrigo.augusto.r21@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.cta}>Agendar Consulta</a>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
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
            <form 
              className={styles.contactForm} 
              action="https://formcarry.com/s/4dwcmws5VUl" 
              method="POST"
              onSubmit={() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
              }}
            >>
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
              <div className={styles.formStatus}>
                <p>Sua mensagem será respondida em até 24 horas úteis.</p>
              </div>
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
