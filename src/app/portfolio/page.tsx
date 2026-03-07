'use client';
import { useState } from 'react';

export default function Portfolio() {
    const [filter, setFilter] = useState('all');

    const projects = [
        { title: "Real Estate Theme", category: "wordpress", img: "/assets/images/portfolio/wp-real-estate.png", link: "https://railestatesearch.co.uk" },
        { title: "WooCommerce Store", category: "wordpress", img: "/assets/images/portfolio/wp-woocommerce.png", link: "https://www.atenlighting.co.uk" },
        { title: "Sage 10 theme + WooCommerce Store", category: "wordpress", img: "/assets/images/portfolio/sage-theme-woo.png", link: "https://revivelogix.com" },
        { title: "Custom theme + Multilingual Site", category: "wordpress", img: "/assets/images/portfolio/custom-theme-multilingual.png", link: "https://www.trisura.com" },
        { title: "CRM Dashboard", category: "laravel", img: "/assets/images/portfolio/laravel-crm.png", link: "https://app.axiompersonnel.co.uk/login" },
        { title: "Inventory Manager (REST API)", category: "laravel", img: "/assets/images/portfolio/laravel-inventory.png", link: "https://quiickmedicine.ca" },
        { title: "Shopify Store", category: "shopify", img: "/assets/images/portfolio/shopify-theme.png", link: "https://pumpingstations.uk" },
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    return (
        <article className="portfolio active" data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
                <ul className="filter-list">
                    <li className="filter-item"><button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button></li>
                    <li className="filter-item"><button className={filter === 'wordpress' ? 'active' : ''} onClick={() => setFilter('wordpress')}>WordPress</button></li>
                    <li className="filter-item"><button className={filter === 'laravel' ? 'active' : ''} onClick={() => setFilter('laravel')}>Laravel</button></li>
                    <li className="filter-item"><button className={filter === 'shopify' ? 'active' : ''} onClick={() => setFilter('shopify')}>Shopify</button></li>
                </ul>

                <ul className="project-list">
                    {filteredProjects.map((project, idx) => (
                        <li key={idx} className="project-item active reveal" data-category={project.category}>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <figure className="project-img">
                                    <img src={project.img} alt={project.title} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.category}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}
