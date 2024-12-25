const translation = {
  createApp: 'Створити додаток',
  types: {
    all: 'Усе',
    chatbot: 'Чатбот',
    agent: 'Агент',
    workflow: 'Робочий процес',
    completion: 'Завершення',
    advanced: 'Чат',
    basic: 'Основні',
  },
  duplicate: 'Дублювати',
  duplicateTitle: 'Дублювати додаток',
  export: 'Експортувати DSL',
  exportFailed: 'Не вдалося експортувати DSL.',
  importDSL: 'Імпортувати файл DSL',
  createFromConfigFile: 'Створити з файлу DSL',
  deleteAppConfirmTitle: 'Видалити цей додаток?',
  deleteAppConfirmContent:
    'Видалення додатка незворотнє. Користувачі більше не зможуть отримати доступ до вашого додатка, і всі налаштування запитів та журнали будуть остаточно видалені.',
  appDeleted: 'Додаток видалено',
  appDeleteFailed: 'Не вдалося видалити додаток',
  join: 'Приєднуйтесь до спільноти',
  communityIntro:
    'Обговорюйте з членами команди, співавторами та розробниками на різних каналах.',
  roadmap: 'Переглянути наш план розвитку',
  newApp: {
    startFromBlank: 'Створити з нуля',
    startFromTemplate: 'Створити з шаблону',
    captionAppType: 'Який тип додатка ви хочете створити?',
    chatbotDescription: 'Побудуйте додаток на основі чату. Цей додаток використовує формат запитань та відповідей, що дозволяє проводити кілька раундів безперервного спілкування.',
    completionDescription: 'Побудуйте додаток, який генерує текст високої якості на основі підказок, таких як генерація статей, резюме, перекладів тощо.',
    completionWarning: 'Цей тип додатка більше не буде підтримуватися.',
    agentDescription: 'Побудуйте інтелектуального агента, який може автономно обирати інструменти для виконання завдань',
    workflowDescription: 'Побудуйте додаток, який генерує текст високої якості на основі робочого процесу з високим рівнем настроювання. Він підходить для досвідчених користувачів.',
    workflowWarning: 'Наразі в бета-версії',
    chatbotType: 'Метод оркестрації чатботу',
    basic: 'Базовий',
    basicTip: 'Для початківців, можна перейти до Chatflow пізніше',
    basicFor: 'ДЛЯ ПОЧАТКІВЦІВ',
    basicDescription: 'Базовий оркестр дозволяє оркеструвати додаток чатбота за допомогою простих налаштувань, без можливості змінювати вбудовані підказки. Він підходить для початківців.',
    advanced: 'Chatflow',
    advancedFor: 'Для досвідчених користувачів',
    advancedDescription: 'Оркестрування робочого процесу оркеструє чатботи у формі робочих процесів, пропонуючи високий рівень настроювання, включаючи можливість редагувати вбудовані підказки. Він підходить для досвідчених користувачів.',
    captionName: 'Іконка та назва додатка',
    appNamePlaceholder: 'Дайте назву вашому додатку',
    captionDescription: 'Опис',
    appDescriptionPlaceholder: 'Введіть опис додатка',
    useTemplate: 'Використовуйте цей шаблон',
    previewDemo: 'Попередній перегляд демонстрації',
    chatApp: 'Асистент',
    chatAppIntro:
      'Я хочу побудувати додаток на основі чату. Цей додаток використовує формат запитань та відповідей, що дозволяє проводити кілька раундів безперервного спілкування.',
    agentAssistant: 'Новий помічник агента',
    completeApp: 'Генератор тексту',
    completeAppIntro:
      'Я хочу створити додаток, який генерує текст високої якості на основі підказок, таких як генерація статей, резюме, перекладів тощо.',
    showTemplates: 'Я хочу вибрати з шаблону',
    hideTemplates: 'Повернутися до вибору режиму',
    Create: 'Створити',
    Cancel: 'Скасувати',
    nameNotEmpty: 'Назва не може бути порожньою',
    appTemplateNotSelected: 'Будь ласка, виберіть шаблон',
    appTypeRequired: 'Будь ласка, виберіть тип додатка',
    appCreated: 'Додаток створено',
    appCreateFailed: 'Не вдалося створити додаток',
    caution: 'Обережність',
    Confirm: 'Підтвердити',
    appCreateDSLErrorPart3: 'Поточна версія DSL програми:',
    appCreateDSLErrorPart4: 'Версія DSL з підтримкою системи:',
    appCreateDSLErrorPart2: 'Хочете продовжити?',
    appCreateDSLErrorTitle: 'Несумісність версій',
    appCreateDSLErrorPart1: 'Виявлено суттєву різницю у версіях DSL. Примусовий імпорт може призвести до неправильної роботи програми.',
    appCreateDSLWarning: 'Увага: різниця у версіях DSL може вплинути на певні функції',
    chooseAppType: 'Виберіть тип програми',
    noIdeaTip: 'Немає ідей? Перегляньте наші шаблони',
    noTemplateFoundTip: 'Спробуйте шукати за різними ключовими словами.',
    foundResult: '{{count}} Результат',
    foundResults: '{{count}} Результатів',
    optional: 'Необов\'язково',
    completionShortDescription: 'AI-помічник для завдань генерації тексту',
    forAdvanced: 'ДЛЯ ДОСВІДЧЕНИХ КОРИСТУВАЧІВ',
    noTemplateFound: 'Не знайдено шаблонів',
    agentUserDescription: 'Інтелектуальний агент, здатний до ітеративного міркування і автономного використання інструменту для досягнення поставлених цілей.',
    advancedUserDescription: 'Оркестрація робочих процесів для багатораундових складних діалогових завдань з можливостями пам\'яті.',
    agentShortDescription: 'Інтелектуальний агент з міркуваннями та автономним використанням інструментів',
    noAppsFound: 'Не знайдено додатків',
    forBeginners: 'ДЛЯ ПОЧАТКІВЦІВ',
    workflowShortDescription: 'Оркестрування для однотактних завдань автоматизації',
    learnMore: 'Дізнатися більше',
    chatbotUserDescription: 'Швидко створюйте чат-бота на базі LLM за допомогою простої конфігурації. Ви можете переключитися на Chatflow пізніше.',
    chatbotShortDescription: 'Чат-бот на базі LLM з простим налаштуванням',
    advancedShortDescription: 'Робочий процес для складних багатоходових діалогів з пам\'яттю',
    completionUserDescription: 'Швидко створюйте помічника зі штучним інтелектом для завдань із генерації тексту за допомогою простої конфігурації.',
    workflowUserDescription: 'Оркестрація робочих процесів для однокомпонентних завдань, таких як автоматизація та пакетна обробка.',
  },
  editApp: 'Редагувати інформацію',
  editAppTitle: 'Редагувати інформацію про додаток',
  editDone: 'Інформація про додаток оновлена',
  editFailed: 'Не вдалося оновити інформацію про додаток',
  iconPicker: {
    ok: 'OK',
    cancel: 'Скасувати',
    emoji: 'Емодзі',
    image: 'Зображення',
  },
  switch: 'Перейти до оркестрації робочого процесу',
  switchTipStart: 'Для вас буде створена нова копія додатка, і нова копія перейде до оркестрації робочого процесу. Нова копія не дозволить ',
  switchTip: 'повернутися',
  switchTipEnd: ' до базової оркестрації.',
  switchLabel: 'Копія додатка, яка буде створена',
  removeOriginal: 'Видалити початковий додаток',
  switchStart: 'Почати перемикання',
  typeSelector: {
    all: 'Усі типи',
    chatbot: 'Чатбот',
    agent: 'Агент',
    workflow: 'Робочий процес',
    completion: 'Завершення',
    advanced: 'Чат',
  },
  tracing: {
    title: 'Відстеження продуктивності додатку',
    description: 'Налаштування стороннього провайдера LLMOps та відстеження продуктивності додатку.',
    config: 'Налаштувати',
    collapse: 'Згорнути',
    expand: 'Розгорнути',
    tracing: 'Відстеження',
    disabled: 'Вимкнено',
    disabledTip: 'Спочатку налаштуйте провайдера',
    enabled: 'В роботі',
    tracingDescription: 'Захоплення повного контексту виконання додатку, включаючи виклики LLM, контекст, підказки, HTTP-запити та інше, на сторонню платформу відстеження.',
    configProviderTitle: {
      configured: 'Налаштовано',
      notConfigured: 'Налаштуйте провайдера для увімкнення відстеження',
      moreProvider: 'Більше провайдерів',
    },
    langsmith: {
      title: 'LangSmith',
      description: 'Універсальна платформа розробника для кожного етапу життєвого циклу додатку на основі LLM.',
    },
    langfuse: {
      title: 'Langfuse',
      description: 'Трасування, оцінки, управління підказками та метрики для налагодження та покращення вашого LLM-додатку.',
    },
    inUse: 'Використовується',
    configProvider: {
      title: 'Налаштувати ',
      placeholder: 'Введіть ваш {{key}}',
      project: 'Проект',
      publicKey: 'Публічний ключ',
      secretKey: 'Секретний ключ',
      viewDocsLink: 'Переглянути документацію {{key}}',
      removeConfirmTitle: 'Видалити налаштування {{key}}?',
      removeConfirmContent: 'Поточне налаштування використовується, його видалення вимкне функцію Відстеження.',
    },
    view: 'Вид',
  },
  answerIcon: {
    title: 'Використовуйте піктограму WebApp для заміни 🤖',
    description: 'Чи слід використовувати піктограму WebApp для заміни 🤖 у спільній програмі',
    descriptionInExplore: 'Чи використовувати піктограму веб-програми для заміни 🤖 в Огляді',
  },
  importFromDSLUrl: 'З URL',
  importFromDSL: 'Імпорт з DSL',
  importFromDSLUrlPlaceholder: 'Вставте посилання на DSL тут',
  importFromDSLFile: 'З DSL-файлу',
  mermaid: {
    handDrawn: 'Намальовані від руки',
    classic: 'Класичний',
  },
  openInExplore: 'Відкрити в Огляді',
  newAppFromTemplate: {
    sidebar: {
      Writing: 'Написання',
      Assistant: 'Асистент',
      Workflow: 'Робочий процес',
      Agent: 'Агент',
      Recommended: 'Рекомендується',
      HR: 'Управління персоналом',
      Programming: 'Програмування',
    },
    byCategories: 'ЗА КАТЕГОРІЯМИ',
    searchAllTemplate: 'Пошук по всіх шаблонах...',
  },
}

export default translation
