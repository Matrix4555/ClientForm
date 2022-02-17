class Input {
    constructor(section, type, name, placeholder) {
        this.section = section;
        this.type = type;
        this.name = name;
        this.placeholder = placeholder;
    }
}

class Selector {
    constructor(section, label, name, isMultiple, className, options) {
        this.section = section;
        this.label = label;
        this.name = name;
        this.isMultiple = isMultiple;
        this.className = className;
        this.options = options;
    }
}

class Option {
    constructor(value, text) {
        this.value = value;
        this.text = text;
    }
}

class Section {
    constructor(name, header, inputs, selectors = []) {
        this.name = name;
        this.header = header;
        this.inputs = inputs;
        this.selectors = selectors;
    }
}

const CLIENTDATA_SECTION = 'clientdata';
const RESIDENCE_SECTION = 'residence';
const DOCUMENT_SECTION = 'document';

const inputs = [
    new Input(CLIENTDATA_SECTION, 'text', 'surname', 'Фамилия'),
    new Input(CLIENTDATA_SECTION, 'text', 'name', 'Имя'),
    new Input(CLIENTDATA_SECTION, 'text', 'patronymic', 'Отчество'),
    new Input(CLIENTDATA_SECTION, 'text', 'birthday', 'Дата рождения'),
    new Input(CLIENTDATA_SECTION, 'tel', 'phone', 'Телефон'),
    new Input(RESIDENCE_SECTION, 'text', 'index', 'Индекс'),
    new Input(RESIDENCE_SECTION, 'text', 'country', 'Страна'),
    new Input(RESIDENCE_SECTION, 'text', 'region', 'Область'),
    new Input(RESIDENCE_SECTION, 'text', 'city', 'Город'),
    new Input(RESIDENCE_SECTION, 'text', 'street', 'Улица'),
    new Input(RESIDENCE_SECTION, 'text', 'building', 'Дом'),
    new Input(DOCUMENT_SECTION, 'text', 'series', 'Серия'),
    new Input(DOCUMENT_SECTION, 'text', 'number', 'Номер'),
    new Input(DOCUMENT_SECTION, 'text', 'issuedby', 'Кем выдан'),
    new Input(DOCUMENT_SECTION, 'text', 'issuedate', 'Дата выдачи')
];

const selectors = [
    new Selector(CLIENTDATA_SECTION, 'Пол', 'gender', false, 'horizontal', [
        new Option('male', 'мужчина'),
        new Option('female', 'женщина')
    ]),
    new Selector(CLIENTDATA_SECTION, 'Группа клиентов', 'group', true, 'vertical', [
        new Option('vip', 'VIP'),
        new Option('problem', 'проблемные'),
        new Option('oms', 'ОМС')
    ]),
    new Selector(CLIENTDATA_SECTION, 'Лечащий врач', 'doctor', false, 'horizontal', [
        new Option('ivanov', 'Иванов'),
        new Option('zakharov', 'Захаров'),
        new Option('chernysheva', 'Чернышева')
    ]),
    new Selector(DOCUMENT_SECTION, 'Тип документа', 'dtype', false, 'vertical', [
        new Option('passport', 'паспорт'),
        new Option('birthcertificate', 'свидетельство о рождении'),
        new Option('driverlicense', 'вод. удостоверение')
    ])
];

export const sections = [
    new Section(
        CLIENTDATA_SECTION,
        'Данные о клиенте',
        inputs.filter(i => i.section === CLIENTDATA_SECTION),
        selectors.filter(i => i.section === CLIENTDATA_SECTION)
    ),
    new Section(
        RESIDENCE_SECTION,
        'Адрес проживания',
        inputs.filter(i => i.section === RESIDENCE_SECTION),
        selectors.filter(i => i.section === RESIDENCE_SECTION)
    ),
    new Section(
        DOCUMENT_SECTION,
        'Привязка документа',
        inputs.filter(i => i.section === DOCUMENT_SECTION),
        selectors.filter(i => i.section === DOCUMENT_SECTION)
    )
];

export const fieldsForForm = {
    surname: '',
    name: '',
    patronymic: '',
    birthday: '',
    phone: '',

    index: '',
    country: '',
    region: '',
    city: '',
    street: '',
    building: '',

    series: '',
    number: '',
    issuedby: '',
    issuedate: '',

    gender: '',
    group: [],
    doctor: '',
    dtype: ''
};
