import Head from "next/head";

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text reveal active">
        <p>
          I’m Nikhil, a Full-stack PHP developer based in India with 7+ years of experience building
          custom WordPress
          themes (Sage 10 + Bedrock), Laravel SaaS apps, and Shopify storefronts. I love turning
          complex requirements into clean, maintainable code and contributing to open-source projects
          whenever I can.
        </p>

        <p>
          I focus on writing clean, maintainable code and delivering user-friendly solutions that solve
          real business
          problems. Whether it’s building custom themes, optimizing backend workflows, or integrating
          APIs, I always
          aim to blend functionality with great UI/UX. I’m also passionate about open-source and
          continuously learning
          to stay ahead in the evolving web ecosystem.
        </p>

        {/* Stats Row */}
        <div className="stats-row reveal active">
          <div className="stat-item">
            <h4 className="h4 stat-number">7+</h4>
            <p className="stat-text">Years Experience</p>
          </div>
          <div className="stat-item">
            <h4 className="h4 stat-number">50+</h4>
            <p className="stat-text">Projects Done</p>
          </div>
          <div className="stat-item">
            <h4 className="h4 stat-number">100%</h4>
            <p className="stat-text">Client Satisfaction</p>
          </div>
        </div>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>

        <ul className="service-list">
          <li className="service-item reveal active">
            <div className="service-icon-box">
              <img src="/assets/images/icon-dev.svg" alt="Web Development" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Custom WordPress Development</h4>
              <p className="service-item-text">
                Building high-performance WordPress sites using Sage 10, Bedrock, and ACF. Clean
                code, fast load
                times, and SEO-friendly structure.
              </p>
            </div>
          </li>

          <li className="service-item reveal active">
            <div className="service-icon-box">
              <img src="/assets/images/icon-dev.svg" alt="Laravel Development" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Laravel Web Applications</h4>
              <p className="service-item-text">
                Developing scalable Laravel applications including admin panels, REST APIs,
                multi-user portals, and
                custom dashboards.
              </p>
            </div>
          </li>

          <li className="service-item reveal active">
            <div className="service-icon-box">
              <img src="/assets/images/icon-design.svg" alt="Shopify Design" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Shopify Customization</h4>
              <p className="service-item-text">
                Creating and customizing Shopify themes with Liquid and adding tailored features to
                enhance your
                store's performance.
              </p>
            </div>
          </li>

          <li className="service-item reveal active">
            <div className="service-icon-box">
              <img src="/assets/images/icon-design.svg" alt="UI/UX Design" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Responsive Frontend Design</h4>
              <p className="service-item-text">
                Crafting responsive, mobile-first interfaces using HTML, SCSS, JavaScript, and
                modern UI frameworks.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          <li className="testimonials-item">
            <div className="content-card reveal active">
              <figure className="testimonials-avatar-box">
                <img src="/assets/images/avatar-3.png" alt="Lyn" width="60" />
              </figure>
              <h4 className="h4 testimonials-item-title">Lyn</h4>
              <time dateTime="2025-05-02">02 May, 2025</time>
              <div className="testimonials-text">
                <p>
                  Nikhil revamped our WooCommerce store using Sage 10 and completely transformed
                  our user experience. The site looks cleaner, loads faster, and is much easier to
                  manage now. He also implemented custom WPBakery widgets to reduce plugin bloat
                  and improved mobile performance drastically. His technical knowledge and
                  proactive suggestions made a huge difference to our online business.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
