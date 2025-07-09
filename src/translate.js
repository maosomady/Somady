import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            about: 'About',
            contact: 'Contact',
            project: 'Project',
        },
        khm: {
            about: 'អំពីយើង',
            contact: 'ទំនាក់ទំនង',
            project: 'គម្រោង',
        }
    }
}
)
export default i18n;