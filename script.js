 const translations = {
            en: {
                nav_home: 'Home',
                nav_projects: 'Projects',
                nav_contact: 'Contact',
                hero_title: "Hi I'm Oualid",
                hero_subtitle: 'welcome to my space on the web',
                stats_projects: 'Projects',
                stats_completed: 'Completed',
                stats_years: 'Years of',
                stats_experience: 'Experience',
                projects_title: 'Coming Soon',
                projects_subtitle: 'Currently working on exciting projects. Stay tuned!',
                contact_title: 'Want to work together?',
                contact_subtitle: "Let's create something amazing! Feel free to reach out and let's discuss your next project.",
                contact_button: 'Get In Touch',
                contact_email: 'Email Me',
                footer_tagline: 'Creating digital experiences',
                footer_copyright: '© 2025 Oualid. All rights reserved.'
            },
            ar: {
                nav_home: 'الرئيسية',
                nav_projects: 'المشاريع',
                nav_contact: 'تواصل معي',
                hero_title: 'مرحبا أنا وليد',
                hero_subtitle: 'أهلا بك في مساحتي على الويب',
                stats_projects: 'مشاريع',
                stats_completed: 'مكتملة',
                stats_years: 'سنوات من',
                stats_experience: 'الخبرة',
                projects_title: 'قريباً',
                projects_subtitle: 'أعمل حالياً على مشاريع مثيرة. ترقبوا!',
                contact_title: 'هل تريد العمل معاً؟',
                contact_subtitle: 'لنبتكر شيئاً مذهلاً! لا تتردد في التواصل معي لمناقشة مشروعك القادم.',
                contact_button: 'تواصل معي',
                contact_email: 'راسلني',
                footer_tagline: 'صناعة التجارب الرقمية',
                footer_copyright: '© 2025 وليد. جميع الحقوق محفوظة.'
            }
        };

        // Language Switcher
        const langSwitcher = document.querySelector('.language-switcher');
        const langCurrent = document.querySelector('.lang-current');
        const langOptions = document.querySelectorAll('.lang-option');
        const currentFlag = document.getElementById('currentFlag');
        const currentLang = document.getElementById('currentLang');
        const html = document.documentElement;

        let currentLanguage = 'en';

        langCurrent.addEventListener('click', () => {
            langSwitcher.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!langSwitcher.contains(e.target)) {
                langSwitcher.classList.remove('active');
            }
        });

        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                const flagSrc = option.querySelector('.lang-option-flag').src;
                const langName = option.querySelector('.lang-option-name').textContent;

                currentLanguage = lang;
                currentFlag.src = flagSrc;
                currentLang.textContent = langName;

                langOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');

                if (lang === 'ar') {
                    html.setAttribute('lang', 'ar');
                    html.setAttribute('dir', 'rtl');
                } else {
                    html.setAttribute('lang', 'en');
                    html.setAttribute('dir', 'ltr');
                }

                updateTranslations(lang);
                langSwitcher.classList.remove('active');
            });
        });

        function updateTranslations(lang) {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
        }

        langOptions[0].classList.add('active');

        // Menu Toggle
        const menuToggle = document.querySelector('.navbar-toggle');
        const navMenu = document.querySelector('.navbar-menu');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.navbar-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Scroll Animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const animatedElements = new Set();

        const animateOnScroll = (entries) => {
            entries.forEach((entry) => {
                const elementId = entry.target.dataset.animateId;
                
                if (entry.isIntersecting) {
                    if (!animatedElements.has(elementId)) {
                        entry.target.classList.add('show');
                        animatedElements.add(elementId);
                    } else {
                        entry.target.classList.add('show');
                    }
                } else {
                    entry.target.classList.remove('show');
                }
            });
        };

        const scrollObserver = new IntersectionObserver(animateOnScroll, observerOptions);

        const heroTitle = document.querySelector('.hero-text h1');
        if (heroTitle) {
            heroTitle.dataset.animateId = 'hero-title';
            scrollObserver.observe(heroTitle);
        }

        const heroDescription = document.querySelector('.hero-text .p');
        if (heroDescription) {
            heroDescription.dataset.animateId = 'hero-description';
            scrollObserver.observe(heroDescription);
        }

        const socialLinks = document.querySelector('.social-links');
        if (socialLinks) {
            socialLinks.dataset.animateId = 'social-links';
            scrollObserver.observe(socialLinks);
        }

        const statsContainer = document.querySelector('.stats-container');
        if (statsContainer) {
            statsContainer.dataset.animateId = 'stats-container';
            scrollObserver.observe(statsContainer);
        }

        const heroScene = document.querySelector('.scene');
        if (heroScene) {
            heroScene.dataset.animateId = 'hero-scene';
            scrollObserver.observe(heroScene);
        }

        const projectsTitle = document.querySelector('.projects-title');
        if (projectsTitle) {
            projectsTitle.dataset.animateId = 'projects-title';
            scrollObserver.observe(projectsTitle);
        }

        const contactCard = document.querySelector('.contact-card');
        if (contactCard) {
            contactCard.dataset.animateId = 'contact-card';
            scrollObserver.observe(contactCard);
        }

        // Contact Button
        const contactBtn = document.getElementById('contactBtn');
        const contactLinks = document.getElementById('contactLinks');

        if (contactBtn && contactLinks) {
            contactBtn.addEventListener('click', () => {
                contactLinks.classList.toggle('show');
                
                const isShown = contactLinks.classList.contains('show');
                const btnText = contactBtn.querySelector('span');
                
                if (isShown) {
                    btnText.textContent = currentLanguage === 'ar' ? 'إخفاء' : 'Hide';
                    contactBtn.querySelector('i').className = 'fas fa-times';
                } else {
                    btnText.textContent = currentLanguage === 'ar' ? 'تواصل معي' : 'Get In Touch';
                    contactBtn.querySelector('i').className = 'fas fa-arrow-right';
                }
            });
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar Background on Scroll
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.style.background = 'rgba(26, 29, 36, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'none';
                navbar.style.boxShadow = 'none';
            }
        });