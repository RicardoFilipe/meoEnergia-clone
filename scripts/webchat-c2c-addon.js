function waitForChatbot() {
    return new Promise((resolve) => {
        const observer = new MutationObserver(() => {
            const chatbot = document.getElementById('chatbot');

            if (chatbot?.shadowRoot) {
                observer.disconnect();
                resolve(chatbot);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

// =============================================================
//  MOCK — remover quando a integração real estiver disponível
//  URL base + 21 campos do formulário pré-preenchidos
// =============================================================
const infoDummie = {
    url: 'https://meoenergia-demo.netlify.app/formulariomeoenergia' +
        '?frm_nome=Jo%C3%A3o+Silva' +
        '&frm_phone=912345678' +
        '&frm_morada=Rua+das+Flores%2C+25+3%C2%BADto' +
        '&frm_cp=1234-567' +
        '&frm_email=joao.silva%40email.com' +
        '&frm_nif=123456789' +
        '&frm_iban=PT50000201231234567890154' +
        '&frm_email_pay=joao.silva%40email.com' +
        '&frm_cpe=PT0002000012345678AA' +
        '&frm_servico=210123456' +
        '&frm_pagamento=debitoDireto' +
        '&frm_fornecedor=EDP+Comercial' +
        '&frm_tipo_tarifa=Tarifa+fixa' +
        '&frm_potencia=6%2C9' +
        '&frm_horario=Simples' +
        '&frm_ciclo=Sem+ciclo' +
        '&frm_moradaexiste=Sim' +
        '&frm_tarifa=N%C3%A3o' +
        '&frm_transmitir=Sim' +
        '&frm_tratamento=N%C3%A3o' +
        '&frm_termos=true'
};

async function initAddon() {

    const chatbot = await waitForChatbot();
    const shadow = chatbot.shadowRoot;

    if (!shadow) return;

    const chatContainer = shadow.getElementById('bsc-chat-container');
    const botCapsule = shadow.querySelector('.bsc-chat-minimized');

    if (!chatContainer) return;

    chatbot.addEventListener("chat-user-interaction", (e) => {
        if (e.detail?.action === 'messageSent') {
            endC2CMode()
        }
    });

    chatbot.addEventListener("chat-action-event", (e) => {
        if (e.detail.key == "aderirOnlineFormData") {
            console.log('[webchat-c2c-addon] Redirecionando para formulário (MOCK):', infoDummie.url);
            window.location.href = infoDummie.url;

            // TODO: substituir infoDummie.url pela URL construída dinamicamente com os dados reais:
            // const params = new URLSearchParams(e.detail.value);
            // window.location.href = 'https://meoenergia-demo.netlify.app/formulariomeoenergia?' + params.toString();
        }
    });

    setTimeout(() => {
        startC2CMode()
    }, 500);

    if (botCapsule) {
        setTimeout(() => {
            botCapsule.classList.add('expand-bubble');

            setTimeout(() => {
                botCapsule.classList.remove('expand-bubble');
            }, 3000);

        }, 3000);
    }
}

function addClassToChatContainer(className) {
    const el = document
        .getElementById('chatbot')
        .shadowRoot
        .getElementById('bsc-chat-container');

    if (el) {
        el.classList.add(className);
    }
}

function removeClassFromChatContainer(className) {
    const el = document
        .getElementById('chatbot')
        .shadowRoot
        .getElementById('bsc-chat-container');

    if (el) {
        el.classList.remove(className);
    }
}

initAddon();


function startC2CMode() {
    addClassToChatContainer('c2c-mode')
    removeClassFromChatContainer('c2c-ready')
}

function endC2CMode() {
    removeClassFromChatContainer('c2c-mode')
    addClassToChatContainer('c2c-ready')
}


// =============================================================
// ======================= DEPRECATED ==========================
// === Lógica anterior: escrita de dados no localStorage =======
// === Substituída por redirect direto via URL parameters =======
// =============================================================

/*
    chatbot.addEventListener("chat-action-event", (e) => {
        if (e.detail.key == "aderirOnlineFormData") {
            console.log('Saving aderirOnlineFormData to localStorage:', e.detail.value);
            try {
                localStorage.setItem(`bsc_action_aderirOnlineFormData`, JSON.stringify(e.detail.value));
            } catch (e) {
                console.warn('Could not save action data to localStorage', e);
            }
        }
    });
*/
