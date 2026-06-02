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
            console.log('Saving aderirOnlineFormData to localStorage:', e.detail.value);
            try {
                localStorage.setItem(`bsc_action_aderirOnlineFormData`, JSON.stringify(e.detail.value));
            } catch (e) {
                console.warn('Could not save action data to localStorage', e);
            }
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
