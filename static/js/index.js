/**
 * 主题切换插件
 */
;(function ($) {
    window.eui = window.eui || {};
    window.eui.theme = function (theme) {
        $body = $(document.body);
        var oldTheme = $body.data('theme');
        if (oldTheme) {
            $body.removeClass('theme-' + oldTheme);
        }
        $body.data('theme', theme);
        $body.addClass('theme-' + theme);
    };

    $('[eui-toggle-theme]').on('click', function (e) {
        e.preventDefault();

        var theme = $(this).attr('eui-toggle-theme');
        eui.theme(theme);
    });
})(jQuery);

$(function () {
    var editor = new eEditor('editor-trigger');
    editor.config.menus = [
        //'source', '|',
        'bold',
        'italic',
        'eraser',
        'head',
        '|',
        'link',
        'unlink',
        'fullscreen',
        '|', 'unorderlist', 'orderlist',
        '|', 'undo', 'redo',
    ];
    editor.create();

})