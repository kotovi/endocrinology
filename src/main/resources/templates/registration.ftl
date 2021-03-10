<#import "parts/common.ftl" as c>
<#import "parts/footer.ftl" as f>

<@c.page>
    <!-- template for the modal component -->
    <script type="text/x-template" id="modal-template">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                        <div class="modal-header">
                            <slot name="header">
                            </slot>
                        </div>
                        <div class="modal-body">
                            <slot name="body">
                            </slot>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                                <button class="btn btn-outline-light" style="background: #293f50; margin: 2px;" @click="$emit('close')">
                                    Закрыть
                                </button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </script>
    <#noparse>
        <div class="container">
            <div class="starter-template">
                <div id="app"></div>
                <script src="/js/registration.js"></script>
            </div>
        </div>
    </#noparse>
</@c.page>

<@f.page></@f.page>