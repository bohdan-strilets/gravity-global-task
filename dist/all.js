const refs={backdop:document.querySelector("[data-backdrop]"),buttonClose:document.querySelector("[data-button-close]"),buttonOpen:document.querySelector("[data-button-open]")},openModal=()=>{refs.backdop.classList.remove("is-hidden"),window.addEventListener("keydown",pressEscButton)},closeModal=()=>{refs.backdop.classList.add("is-hidden"),window.removeEventListener("keydown",pressEscButton)},backdropClick=(refs.buttonOpen.addEventListener("click",openModal),refs.buttonClose.addEventListener("click",closeModal),e=>{e.target===e.currentTarget&&closeModal()}),pressEscButton=(refs.backdop.addEventListener("click",backdropClick),e=>{"Escape"===e.code&&closeModal()});