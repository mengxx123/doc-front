<template>
    <my-page title="文档">
        <!-- 头部 -->
        <header class="layout-header">
            <ul class="nav header-tab">
                <li class="nav-item"><a id="file" class="nav-link" href="#">文件</a></li>
                <li class="nav-item active"><a class="nav-link" href="#tab1" data-toggle="tab">编辑</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab3" data-toggle="tab">插入</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab4" data-toggle="tab">表格</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab3" data-toggle="tab">视图</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab3" data-toggle="tab">工具</a></li>
            </ul>
            <div class="tab-content mycontent">
                <div id="tab1" class="tab-pane in active">

                    <div class="box box-tool">
                        <div class="box-header">
                            <h3 class="box-title">历史记录</h3>
                        </div>
                        <div class="box-body">
                            <a id="undo" class="btn btn-default" href="#" title="撤销"><i class="icon icon-undo"></i></a>
                            <a id="redo" class="btn btn-default" href="#" title="恢复"><i class="icon icon-redo"></i></a>
                        </div>
                    </div>
                    <div class="box box-tool">
                        <div class="box-header">
                            <h3 class="box-title">字体</h3>
                            <div class="box-body">
                                <a id="select-color" class="btn btn-default" href="#">颜色</a>
                                <a id="bold" class="btn btn-default" href="#" title="加粗"><i class="icon icon-bold"></i></a>
                                <a id="italic" class="btn btn-default" href="#" title="斜体"><i class="icon icon-italic"></i></a>
                                <a id="underline" class="btn btn-default" href="#" title="下划线"><i class="icon icon-underline"></i></a>
                                <a id="strikethrough" class="btn btn-default" href="#" title="删除线"><i class="icon icon-strikethrough"></i></a>
                                <a id="superscript" class="btn btn-default" href="#" title="上标"><i class="icon icon-superscript"></i></a>
                                <a id="subscript" class="btn btn-default" href="#" title="下标"><i class="icon icon-subscript"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="box box-tool">
                        <div class="box-header">
                            <h3 class="box-title">段落</h3>
                            <div class="box-body">
                                <a id="align-left" class="btn btn-default" href="#" title="左对齐"><i class="icon icon-align-left"></i></a>
                                <a id="align-center" class="btn btn-default" href="#" title="居中"><i class="icon icon-align-center"></i></a>
                                <a id="align-right" class="btn btn-default" href="#" title="右对齐"><i class="icon icon-align-right"></i></a>
                                <a id="unorderlist" class="btn btn-default" href="#" title="无序列表"><i class="icon icon-list"></i></a>
                                <a id="orderlist" class="btn btn-default" href="#" title="有序列表"><i class="icon icon-list-order"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab2" class="tab-pane">

                </div>
                <div id="tab3" class="tab-pane">
                    <div class="box box-tool">
                        <div class="box-header">
                            <h3 class="box-title">符号</h3>
                            <div class="box-body">
                                <a id="insert-mark" class="btn btn-default" href="#" title="插入符号"><i class="icon icon-pi"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="box box-tool">
                        <div class="box-header">
                            <h3 class="box-title">链接</h3>
                            <div class="box-body">
                                <a id="insert-link" class="btn btn-default" href="#" title="添加链接"><i class="icon icon-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab4" class="tab-pane">
                    <div class="box box-tool">
                        <div class="box-header">
                            <h3 class="box-title">符号</h3>
                            <div class="box-body">
                                <a id="insert-table" class="btn btn-default" href="#" title="插入表格"><i class="icon icon-table"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- /头部 -->
        <div class="layout-body">
            <div class="layout-side">

            </div>
            <div class="layout-content">
                <div id="editor-trigger">
                    <p>请输入内容</p>
                </div>
            </div>
        </div>
        <div class="loading-box">
            <div class="office">Office</div>
            <div class="word">Word</div>
            <div class="start">正在启动...</div>
        </div>
        <div id="operate" class="operate animated fadeInRightSmall">
            <div class="operate-side">
                <i id="back" class="icon icon-back">2</i>
                <ul class="nav operate-tab">
                    <li class="nav-item active"><a class="nav-link" href="#tab-op-1" data-toggle="tab">新建</a></li>
                    <li class="nav-item"><a class="nav-link" href="#tab-op-2" data-toggle="tab">打开</a></li>
                    <li class="nav-item"><a class="nav-link" href="#tab-op-3" data-toggle="tab">保存</a></li>
                    <li class="nav-item"><a class="nav-link" href="#tab-op-4" data-toggle="tab">关于</a></li>
                </ul>
            </div>
            <div class="tab-content operate-content">
                <div id="tab-op-1" class="tab-pane in active">
                    <h2 class="title">新建</h2>
                    <ul id="template-list" class="template-list">
                        <li id="blank" class="item">
                            <div class="image"></div>
                            <div class="text">空白文档</div>
                        </li>
                        <li class="item">
                            <img class="image" src="/static/img/demo/survey-scheme.png">
                            <div class="text">调研方案</div>
                        </li>
                        <li class="item">
                            <img class="image" src="/static/img/demo/design-document.png">
                            <div class="text">总体设计文档</div>
                        </li>
                        <li class="item">
                            <img class="image" src="/static/img/demo/projectiteration.png">
                            <div class="text">项目迭代周报</div>
                        </li>
                        <li class="item">
                            <img class="image" src="/static/img/demo/weekly.png">
                            <div class="text">周报</div>
                        </li>
                    </ul>
                </div>
                <div id="tab-op-2" class="tab-pane">
                    <h2 class="title">打开</h2>
                </div>
                <div id="tab-op-3" class="tab-pane">
                    <h2 class="title">保存</h2>
                </div>
                <div id="tab-op-4" class="tab-pane">
                    <h2 class="title">关于</h2>
                </div>
            </div>
        </div>
        <!-- 插入符号对话框 -->
        <div id="mark-box" class="mark-box">
            <ul class="nav mark-tab">
                <li class="nav-item active"><a class="nav-link" href="#tab-mark-1" data-toggle="tab">特殊字符</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab-mark-2" data-toggle="tab">罗马符号</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab-mark-3" data-toggle="tab">数字字符</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab-mark-4" data-toggle="tab">日文字符</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab-mark-5" data-toggle="tab">希腊字符</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab-mark-6" data-toggle="tab">俄文字符</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab-mark-7" data-toggle="tab">拼音字母</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab-mark-8" data-toggle="tab">英语音标</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab-mark-9" data-toggle="tab">其他</a></li>
            </ul>
            <div class="tab-content">
                <div id="tab-mark-1" class="tab-pane in active">
                    <div id="tsfh" class="mark-list"><span>、</span><span>。</span><span>·</span><span>ˉ</span><span>ˇ</span><span>¨</span><span>〃</span><span>々</span><span>—</span><span>～</span><span>‖</span><span>…</span><span>‘</span><span>’</span><span>“</span><span>”</span><span>〔</span><span>〕</span><span>〈</span><span>〉</span><span>《</span><span>》</span><span>「</span><span>」</span><span>『</span><span>』</span><span>〖</span><span>〗</span><span>【</span><span>】</span><span>±</span><span>×</span><span>÷</span><span>∶</span><span>∧</span><span>∨</span><span>∑</span><span>∏</span><span>∪</span><span>∩</span><span>∈</span><span>∷</span><span>√</span><span>⊥</span><span>∥</span><span>∠</span><span>⌒</span><span>⊙</span><span>∫</span><span>∮</span><span>≡</span><span>≌</span><span>≈</span><span>∽</span><span>∝</span><span>≠</span><span>≮</span><span>≯</span><span>≤</span><span>≥</span><span>∞</span><span>∵</span><span>∴</span><span>♂</span><span>♀</span><span>°</span><span>′</span><span>″</span><span>℃</span><span>＄</span><span>¤</span><span>￠</span><span>￡</span><span>‰</span><span>§</span><span>№</span><span>☆</span><span>★</span><span>○</span><span>●</span><span>◎</span><span>◇</span><span>◆</span><span>□</span><span>■</span><span>△</span><span>▲</span><span>※</span><span>→</span><span>←</span><span>↑</span><span>↓</span><span>〓</span><span>〡</span><span>〢</span><span>〣</span><span>〤</span><span>〥</span><span>〦</span><span>〧</span><span>〨</span><span>〩</span><span>㊣</span><span>㎎</span><span>㎏</span><span>㎜</span><span>㎝</span><span>㎞</span><span>㎡</span><span>㏄</span><span>㏎</span><span>㏑</span><span>㏒</span><span>㏕</span><span>︰</span><span>￢</span><span>￤</span><span>℡</span><span>ˊ</span><span>ˋ</span><span>˙</span><span>–</span><span>―</span><span>‥</span><span>‵</span><span>℅</span><span>℉</span><span>↖</span><span>↗</span><span>↘</span><span>↙</span><span>∕</span><span>∟</span><span>∣</span><span>≒</span><span>≦</span><span>≧</span><span>⊿</span><span>═</span><span>║</span><span>╒</span><span>╓</span><span>╔</span><span>╕</span><span>╖</span><span>╗</span><span>╘</span><span>╙</span><span>╚</span><span>╛</span><span>╜</span><span>╝</span><span>╞</span><span>╟</span><span>╠</span><span>╡</span><span>╢</span><span>╣</span><span>╤</span><span>╥</span><span>╦</span><span>╧</span><span>╨</span><span>╩</span><span>╪</span><span>╫</span><span>╬</span><span>╭</span><span>╮</span><span>╯</span><span>╰</span><span>╱</span><span>╲</span><span>╳</span><span>▁</span><span>▂</span><span>▃</span><span>▄</span><span>▅</span><span>▆</span><span>▇</span><span>�</span><span>█</span><span>▉</span><span>▊</span><span>▋</span><span>▌</span><span>▍</span><span>▎</span><span>▏</span><span>▓</span><span>▔</span><span>▕</span><span>▼</span><span>▽</span><span>◢</span><span>◣</span><span>◤</span><span>◥</span><span>☉</span><span>⊕</span><span>〒</span><span>〝</span><span>〞</span></div>
                </div>
                <div id="tab-mark-2" class="tab-pane">
                    <div id="lmsz" class="mark-list"><span>ⅰ</span><span>ⅱ</span><span>ⅲ</span><span>ⅳ</span><span>ⅴ</span><span>ⅵ</span><span>ⅶ</span><span>ⅷ</span><span>ⅸ</span><span>ⅹ</span><span>Ⅰ</span><span>Ⅱ</span><span>Ⅲ</span><span>Ⅳ</span><span>Ⅴ</span><span>Ⅵ</span><span>Ⅶ</span><span>Ⅷ</span><span>Ⅸ</span><span>Ⅹ</span><span>Ⅺ</span><span>Ⅻ</span></div>
                </div>
                <div id="tab-mark-3" class="tab-pane">
                    <div id="szfh" class="mark-list"><span>⒈</span><span>⒉</span><span>⒊</span><span>⒋</span><span>⒌</span><span>⒍</span><span>⒎</span><span>⒏</span><span>⒐</span><span>⒑</span><span>⒒</span><span>⒓</span><span>⒔</span><span>⒕</span><span>⒖</span><span>⒗</span><span>⒘</span><span>⒙</span><span>⒚</span><span>⒛</span><span>⑴</span><span>⑵</span><span>⑶</span><span>⑷</span><span>⑸</span><span>⑹</span><span>⑺</span><span>⑻</span><span>⑼</span><span>⑽</span><span>⑾</span><span>⑿</span><span>⒀</span><span>⒁</span><span>⒂</span><span>⒃</span><span>⒄</span><span>⒅</span><span>⒆</span><span>⒇</span><span>①</span><span>②</span><span>③</span><span>④</span><span>⑤</span><span>⑥</span><span>⑦</span><span>⑧</span><span>⑨</span><span>⑩</span><span>㈠</span><span>㈡</span><span>㈢</span><span>㈣</span><span>㈤</span><span>㈥</span><span>㈦</span><span>㈧</span><span>㈨</span><span>㈩</span></div>
                </div>
                <div id="tab-mark-4" class="tab-pane">
                    <div id="rwfh" class="mark-list"><span>ぁ</span><span>あ</span><span>ぃ</span><span>い</span><span>ぅ</span><span>う</span><span>ぇ</span><span>え</span><span>ぉ</span><span>お</span><span>か</span><span>が</span><span>き</span><span>ぎ</span><span>く</span><span>ぐ</span><span>け</span><span>げ</span><span>こ</span><span>ご</span><span>さ</span><span>ざ</span><span>し</span><span>じ</span><span>す</span><span>ず</span><span>せ</span><span>ぜ</span><span>そ</span><span>ぞ</span><span>た</span><span>だ</span><span>ち</span><span>ぢ</span><span>っ</span><span>つ</span><span>づ</span><span>て</span><span>で</span><span>と</span><span>ど</span><span>な</span><span>に</span><span>ぬ</span><span>ね</span><span>の</span><span>は</span><span>ば</span><span>ぱ</span><span>ひ</span><span>び</span><span>ぴ</span><span>ふ</span><span>ぶ</span><span>ぷ</span><span>へ</span><span>べ</span><span>ぺ</span><span>ほ</span><span>ぼ</span><span>ぽ</span><span>ま</span><span>み</span><span>む</span><span>め</span><span>も</span><span>ゃ</span><span>や</span><span>ゅ</span><span>ゆ</span><span>ょ</span><span>よ</span><span>ら</span><span>り</span><span>る</span><span>れ</span><span>ろ</span><span>ゎ</span><span>わ</span><span>ゐ</span><span>ゑ</span><span>を</span><span>ん</span><span>ァ</span><span>ア</span><span>ィ</span><span>イ</span><span>ゥ</span><span>ウ</span><span>ェ</span><span>エ</span><span>ォ</span><span>オ</span><span>カ</span><span>ガ</span><span>キ</span><span>ギ</span><span>ク</span><span>グ</span><span>ケ</span><span>ゲ</span><span>コ</span><span>ゴ</span><span>サ</span><span>ザ</span><span>シ</span><span>ジ</span><span>ス</span><span>ズ</span><span>セ</span><span>ゼ</span><span>ソ</span><span>ゾ</span><span>タ</span><span>ダ</span><span>チ</span><span>ヂ</span><span>ッ</span><span>ツ</span><span>ヅ</span><span>テ</span><span>デ</span><span>ト</span><span>ド</span><span>ナ</span><span>ニ</span><span>ヌ</span><span>ネ</span><span>ノ</span><span>ハ</span><span>バ</span><span>パ</span><span>ヒ</span><span>ビ</span><span>ピ</span><span>フ</span><span>ブ</span><span>プ</span><span>ヘ</span><span>ベ</span><span>ペ</span><span>ホ</span><span>ボ</span><span>ポ</span><span>マ</span><span>ミ</span><span>ム</span><span>メ</span><span>モ</span><span>ャ</span><span>ヤ</span><span>ュ</span><span>ユ</span><span>ョ</span><span>ヨ</span><span>ラ</span><span>リ</span><span>ル</span><span>レ</span><span>ロ</span><span>ヮ</span><span>ワ</span><span>ヰ</span><span>ヱ</span><span>ヲ</span><span>ン</span><span>ヴ</span><span>ヵ</span><span>ヶ</span></div>
                </div>
                <div id="tab-mark-5" class="tab-pane">
                    <div id="xlzm" class="mark-list"><span>Α</span><span>Β</span><span>Γ</span><span>Δ</span><span>Ε</span><span>Ζ</span><span>Η</span><span>Θ</span><span>Ι</span><span>Κ</span><span>Λ</span><span>Μ</span><span>Ν</span><span>Ξ</span><span>Ο</span><span>Π</span><span>Ρ</span><span>Σ</span><span>Τ</span><span>Υ</span><span>Φ</span><span>Χ</span><span>Ψ</span><span>Ω</span><span>α</span><span>β</span><span>γ</span><span>δ</span><span>ε</span><span>ζ</span><span>η</span><span>θ</span><span>ι</span><span>κ</span><span>λ</span><span>μ</span><span>ν</span><span>ξ</span><span>ο</span><span>π</span><span>ρ</span><span>σ</span><span>τ</span><span>υ</span><span>φ</span><span>χ</span><span>ψ</span><span>ω</span></div>
                </div>
                <div id="tab-mark-6" class="tab-pane">
                    <div id="ewzm" class="mark-list"><span>А</span><span>Б</span><span>В</span><span>Г</span><span>Д</span><span>Е</span><span>Ё</span><span>Ж</span><span>З</span><span>И</span><span>Й</span><span>К</span><span>Л</span><span>М</span><span>Н</span><span>О</span><span>П</span><span>Р</span><span>С</span><span>Т</span><span>У</span><span>Ф</span><span>Х</span><span>Ц</span><span>Ч</span><span>Ш</span><span>Щ</span><span>Ъ</span><span>Ы</span><span>Ь</span><span>Э</span><span>Ю</span><span>Я</span><span>а</span><span>б</span><span>в</span><span>г</span><span>д</span><span>е</span><span>ё</span><span>ж</span><span>з</span><span>и</span><span>й</span><span>к</span><span>л</span><span>м</span><span>н</span><span>о</span><span>п</span><span>р</span><span>с</span><span>т</span><span>у</span><span>ф</span><span>х</span><span>ц</span><span>ч</span><span>ш</span><span>щ</span><span>ъ</span><span>ы</span><span>ь</span><span>э</span><span>ю</span><span>я</span></div>
                </div>
                <div id="tab-mark-7" class="tab-pane">
                    <div id="pyzm" class="mark-list"><span>ā</span><span>á</span><span>ǎ</span><span>à</span><span>ē</span><span>é</span><span>ě</span><span>è</span><span>ī</span><span>í</span><span>ǐ</span><span>ì</span><span>ō</span><span>ó</span><span>ǒ</span><span>ò</span><span>ū</span><span>ú</span><span>ǔ</span><span>ù</span><span>ǖ</span><span>ǘ</span><span>ǚ</span><span>ǜ</span><span>ü</span></div>
                </div>
                <div id="tab-mark-8" class="tab-pane">
                    <div id="yyyb" class="mark-list"><span>i:</span><span>i</span><span>e</span><span>æ</span><span>ʌ</span><span>ə:</span><span>ə</span><span>u:</span><span>u</span><span>ɔ:</span><span>ɔ</span><span>a:</span><span>ei</span><span>ai</span><span>ɔi</span><span>əu</span><span>au</span><span>iə</span><span>εə</span><span>uə</span><span>p</span><span>t</span><span>k</span><span>b</span><span>d</span><span>g</span><span>f</span><span>s</span><span>ʃ</span><span>θ</span><span>h</span><span>v</span><span>z</span><span>ʒ</span><span>ð</span><span>tʃ</span><span>tr</span><span>ts</span><span>dʒ</span><span>dr</span><span>dz</span><span>m</span><span>n</span><span>ŋ</span><span>l</span><span>r</span><span>w</span><span>j</span></div>
                </div>
                <div id="tab-mark-9" class="tab-pane">
                    <div id="zyzf" class="mark-list"><span>ㄅ</span><span>ㄆ</span><span>ㄇ</span><span>ㄈ</span><span>ㄉ</span><span>ㄊ</span><span>ㄋ</span><span>ㄌ</span><span>ㄍ</span><span>ㄎ</span><span>ㄏ</span><span>ㄐ</span><span>ㄑ</span><span>ㄒ</span><span>ㄓ</span><span>ㄔ</span><span>ㄕ</span><span>ㄖ</span><span>ㄗ</span><span>ㄘ</span><span>ㄙ</span><span>ㄚ</span><span>ㄛ</span><span>ㄜ</span><span>ㄝ</span><span>ㄞ</span><span>ㄟ</span><span>ㄠ</span><span>ㄡ</span><span>ㄢ</span><span>ㄣ</span><span>ㄤ</span><span>ㄥ</span><span>ㄦ</span><span>ㄧ</span><span>ㄨ</span></div>
                </div>
            </div>
        </div>
        <ul id="template-doc-list" class="template-doc-list">
            <li>
                <p style="font-family: Arial; font-size: 26px; text-align: center;"><span style="font-size: 36px;"><strong>​调研方案模板</strong></span></p>
                <h1>1.背景</h1>
                <p><span style="font-family:Times New Roman,宋体;">说明实验（调研）的目的和出发点，为什么要做这个实验？有什么好处？</span></p>
                <p>时间要求【调研前期设计】</p>
                <h1>2.调研目标</h1>
                <p>1、背景介绍的延伸与量化，说清楚本次调研，你希望达到什么可量化的效果。</p>
                <p>2、描述调研项目结束的标志</p>
                <p>时间要求【调研前期设计】</p>
                <h1>3.调研思路</h1>
                <p>描述清楚你的方法，必要时要说明你采用这种方法的好处，也就是为什么要采用这种方法。</p>
                <p>时间要求【调研前期设计】</p>
                <p style="text-align:justify;"><br></p>
                <h1>4.数据和实验结果</h1>
                <p style="text-align:justify;"><span style="font-family:Times New Roman,宋体;">实验（调研）中用到的数据，比如数据种类（FC、SF），级别（query、拍卖词、广告），数量有多少，是随机抽样还是均匀抽样？为什么要这样取数据、是否合理？</span>
                </p>
                <p style="text-align:justify;"><span style="font-family: 'Times New Roman', 宋体; text-indent: 28px;">统计量（pvr、asn、acp等）要完整，需要有对比结果（good、bad、same），必要的详细数据列举（badcase的例子，解决问题的例子等），详情参见</span>
                </p>
                <p>尽量选用清晰的描述方法，比如表格、或者曲线图等方式</p>
                <p>时间要求【调研后期】</p>
                <p style="text-indent:28px;"><br></p>
                <h1>5.分析和结论</h1>
                <p>根据实验结果，详细分析调研成果，得到清晰的结论（例如是否达到预期，目前的问题，未来可能的改进点）</p>
                <p>时间要求【调研后期】</p>
            </li>
            <li>
                <p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><h1 style="font-family: 黑体; text-align: center;"><span style="font-family: 'Times New Roman', 宋体; font-size: 36px;">文档名称</span></h1><p><span style="font-size: 16px;"></span><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><table style="width:624px;margin-left:7px;border-top:1px solid #000000;border-left:1px solid #000000;border-bottom:1px solid #000000;border-right:1px solid #000000;border-insideH:1px solid #000000;border-insideV:1px solid #000000;border-collapse:collapse;border:none;"><tbody><tr class="firstRow"><td style="width: 168px; vertical-align: top; border: 1px solid rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);" align="center" valign="middle"><p><span style="font-family:Times New Roman,宋体;">系统名称</span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 456px; vertical-align: top; border-top-width: 1px; border-style: solid solid solid none; border-top-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 168px; vertical-align: top; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);" align="center" valign="middle"><p><span style="font-family:Times New Roman,宋体;">项目负责人</span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 456px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 168px; vertical-align: top; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);" align="center" valign="middle"><p><span style="font-family:Times New Roman,宋体;">作者</span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 456px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 168px; vertical-align: top; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);" align="center" valign="middle"><p><span style="font-family:Times New Roman,宋体;">文档提交日期</span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 456px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr style="height:0;"><td style="width:168px;border:none;" align="center" valign="middle"><br></td><td style="width:456px;border:none;"><br></td></tr></tbody></table><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p style="font-family:宋体;font-size:16px;text-align:center;text-align:justify;"><br></p><p><br></p><p><br></p><p style="font-family:宋体;font-size:16px;text-align:center;text-align:justify;"><span style="font-family:Times New Roman,宋体;">修改记录</span></p><table cellspacing="0" cellpadding="0"><tbody><tr class="firstRow"><td valign="top" style="border-color: windowtext; border-width: 1px; padding: 0px 7px; word-break: break-all; background: rgb(191, 191, 191);"><p><strong><span style="font-size: 16px;font-family: Arial, sans-serif">No</span></strong>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td valign="top" style="border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-style: none; padding: 0px 7px; word-break: break-all; background: rgb(191, 191, 191);"><p><strong><span style="font-size: 16px;font-family: 宋体">修改后</span></strong><strong><span style="font-family: 宋体;">版本号</span></strong>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td valign="top" style="border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-style: none; padding: 0px 7px; word-break: break-all; background: rgb(191, 191, 191);"><p><strong><span style="font-size: 16px;font-family: 宋体">修改内容简介</span></strong>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td valign="top" style="border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-style: none; padding: 0px 7px; word-break: break-all; background: rgb(191, 191, 191);"><p><strong><span style="font-size: 16px;font-family: 宋体">修改日期</span></strong>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td valign="top" style="border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-style: none; padding: 0px 7px; word-break: break-all; background: rgb(191, 191, 191);"><p><strong><span style="font-size: 16px;font-family: 宋体">修改人</span></strong>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td valign="top" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px; word-break: break-all;"><p><span style="font-size: 16px;font-family: Arial, sans-serif">1</span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px; word-break: break-all;"><p><span style="font-size: 16px;font-family: Arial, sans-serif">V1.0</span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px; word-break: break-all;"><p><span style="font-size: 16px;font-family: 宋体">全文sd</span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px; word-break: break-all;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px; word-break: break-all;"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: none; padding: 0px 7px; word-break: break-all;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px; word-break: break-all;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px; word-break: break-all;"><p><span style="font-size: 16px;font-family: 宋体">如果系统已编写</span><span style="font-size: 16px;font-family: Arial, sans-serif">MRD</span><span style="font-size: 16px;font-family: 宋体">，写明对应的</span><span style="font-size: 16px;font-family: Arial, sans-serif">MRD</span><span style="font-size: 16px;font-family: 宋体">文档名称</span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px; word-break: break-all;">sdfsdfs</td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr><tr><td valign="top" style="border-right-color: windowtext;border-bottom-color: windowtext;border-left-color: windowtext;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: none;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none; border-left-style: none; border-bottom-color: windowtext; border-bottom-width: 1px; border-right-color: windowtext; border-right-width: 1px; padding: 0px 7px;"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td><td valign="top" style="border-top-style: none;border-left-style: none;border-bottom-color: windowtext;border-bottom-width: 1px;border-right-color: windowtext;border-right-width: 1px;padding: 0 7px"><br></td></tr></tbody></table><p><br></p><p style="font-family:宋体;font-size:16px;text-align:center;text-align:justify;"><br><span style="font-family:Times New Roman,宋体;">背景</span></p><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">在这里简要介绍项目背景、升级需求。如果是新产品，描述产品启动的原因和背景、产品定位、目标取舍、可预期的效果；如果是升级版本，描述升级的原因、对原系统的影响，可预期的效果。如果计划把需求合并到这篇文档里，需在此简要说明需求后，在“3 ”节中进行详细说明。</span></p><h1 style="outlineLvl:0;text-align:justify;"><span style="font-family:Times New Roman;">1 </span><span style="font-family:Times New Roman,宋体;">名词解释</span></h1><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">对文档中出现新的或不常见的名词、概念或简略语给出定义和解释。</span></p><h1 style="outlineLvl:0;text-align:justify;"><span style="font-family:Times New Roman;">2 </span><span style="font-family:Times New Roman,宋体;">设计目标</span></h1><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">2.1 </span><span style="font-family:Times New Roman,宋体;">实现的功能</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">概要描述系统本身的功能性需求，不需描述外部的其他系统。如果项目已有MRD，可在此分层次分条目列出功能点及子功能点。如果没有MRD,需在此列出要实现的功能点及子功能点，并对每一个功能点进行详细说明。功能点之间的层级和关联关系要明晰。这里仅描述功能，不需要涉及实现方案、功能取舍等问题。</span></p><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">2.2 </span><span style="font-family:Times New Roman,宋体;">设计的性能指标</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">在此描述系统本身的性能需求。建议分条列出量化的性能指标，比如响应时间、超时率、资源占用、运行周期等。不能模糊、有岐义、想当然。</span></p><h1 style="outlineLvl:0;text-align:justify;"><span style="font-family:Times New Roman;">3 </span><span style="font-family:Times New Roman,宋体;">系统环境（可选）</span></h1><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">3.1 </span><span style="font-family:Times New Roman,宋体;">假设及与其它系统联系</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">在这里加入系统成功的前提条件及与外界其它系统/模块的联系。采用文字分条列出或采用系统结构图描述均可。与外界系统的详细接口定义，在“6.4 ”中描述。</span></p><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">3.2 </span><span style="font-family:Times New Roman,宋体;">相关软件及硬件</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">在这里加入系统所需的软, 硬件, 包括操作系统, 机器型号及配置要求。建议采用表格形式列出，最好还能规划出服务器和软件构件的部署图。该部分也可以单独编写部署设计文档，并在此引用。</span></p><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">3.3 </span><span style="font-family:Times New Roman,宋体;">系统限制</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">在这里加入系统的已知, 或可预知的限制。</span></p><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">3.4 </span><span style="font-family:Times New Roman,宋体;">数据规模估计</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">通过调研或经验，对数据规模进行估计，包括用户量、数据量、带宽消耗及增长速度等方面。分类分条列出。</span></p><h1 style="outlineLvl:0;text-align:justify;"><span style="font-family:Times New Roman;">4 </span><span style="font-family:Times New Roman,宋体;">设计思路及折衷</span></h1><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">描述系统设计中需要解决或考虑的关键问题或难点问题，解决这些问题可能有不同方案, 在这里加入方案设计的选择, 折衷及解释，并在后面的系统设计中对选中的方案给出进一步阐述。建议分类列出，比如性能、可扩展性、安全性、服务稳定性、反作弊、复用等方面。建议使用调研数据支持设计方案的选择。</span></p><h1 style="outlineLvl:0;text-align:justify;"><span style="font-family:Times New Roman;">5 </span><span style="font-family:Times New Roman,宋体;">系统设计</span></h1><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">5.1 </span><span style="font-family:Times New Roman,宋体;">基本介绍</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">对系统整体的简要说明。</span></p><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">5.2 </span><span style="font-family:Times New Roman,宋体;">系统架构图及说明</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">把系统分解为若干子系统或模块，给出系统架构图，同时简单阐述每个模块完成的主要功能（必要时，给出模块划分的解释，即说明为什么把某些功能设计在某个模块中）。如果各个模块设计运行于不同环境（如操作系统、服务器）下，给出说明。</span></p><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">5.3 </span><span style="font-family:Times New Roman,宋体;">系统流程图及说明（可选）</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">通过流程图说明系统之间的模块是怎么交互来实现系统功能的。</span></p><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">5.4 </span><span style="font-family:Times New Roman,宋体;">与外部系统的接口</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">在这里对该系统与外部系统的接口进行详细定义，若接口较多且复杂，可编写单独的接口设计文档，并在此引用。若外部系统已定义并提供接口文档，在此引用即可。这里的接口包括结构体、函数调用、接口文件、数据库、URL参数和lib库等。若需要使用外部提供的lib库，需要在设计阶段协调好将使用的版本，并在此进行说明。</span></p><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">5.5 </span><span style="font-family:Times New Roman,宋体;">全局性数据结构说明</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">对各模块公用的全局性的数据结构进行说明。若该部分在接口设计中体现，则直接引用接口文档。</span></p><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">5.6 </span><span style="font-family:Times New Roman,宋体;">XXX1模块简要说明</span></h2><h3 style="outlineLvl:2;text-align:justify;"><span style="font-family:Times New Roman;">5.6.1 </span><span style="font-family:Times New Roman,宋体;">XXX1模块的功能</span></h3><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">描述该模块要实现的功能，可以先简要描述，再分条列出。对于模块相关的关键功能和关键技术，也在此说明，供详细设计人员参考。</span></p><h3 style="outlineLvl:2;text-align:justify;"><span style="font-family:Times New Roman;">5.6.2 </span><span style="font-family:Times New Roman,宋体;">与其它模块的接口</span></h3><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">在此描述该模块与系统内其它模块的接口，不包括模块内部的接口。模块内部的接口在详细设计中进行说明。如果接口复杂或描述篇幅较多，可编写单独的接口设计文档，并在此引用。也可以增加二级标题“各模块之间的接口”，对模块之间的接口进行系统、全面的定义。</span></p><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">5.7 </span><span style="font-family:Times New Roman,宋体;">XXX2模块简要说明</span></h2><h3 style="outlineLvl:2;text-align:justify;"><span style="font-family:Times New Roman;">5.7.1 </span><span style="font-family:Times New Roman,宋体;">XXX2模块的功能</span></h3><h3 style="outlineLvl:2;text-align:justify;"><span style="font-family:Times New Roman;">5.7.2 </span><span style="font-family:Times New Roman,宋体;">与其它模块的接口</span></h3><h1 style="outlineLvl:0;text-align:justify;"><span style="font-family:Times New Roman;">6 </span><span style="font-family:Times New Roman,宋体;">风险评估及对其它系统影响（可选）</span></h1><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">6.1 </span><span style="font-family:Times New Roman,宋体;">已知的或可预知的风险</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">在这里加上已经知道的或可能会发生的风险，包括技术、业务等方面。最好针对每个风险，列出相应的应对措施。</span></p><h2 style="outlineLvl:1;text-align:justify;"><span style="font-family:Times New Roman;">6.2 </span><span style="font-family:Times New Roman,宋体;">与其它系统可能的影响</span></h2><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">在“4.1 ”中描述了该系统与其它系统的依赖关系。在这里描述这些依赖关系可能带来的影响。包括本系统对其它系统可能造成的影响以及其它系统可能给本系统造成的影响两个方面。</span></p><h1 style="outlineLvl:0;text-align:justify;"><span style="font-family:Times New Roman;">7 </span><span style="font-family:Times New Roman,宋体;">技术委员会审核意见</span></h1><table style="border-top:1px solid #000000;border-left:1px solid #000000;border-bottom:1px solid #000000;border-right:1px solid #000000;border-insideH:1px solid #000000;border-insideV:1px solid #000000;border-collapse:collapse;border:none;"><tbody><tr style="height:30px;" class="firstRow"><td style="width: 34px; vertical-align: middle; border: 1px solid rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);"><p style="text-align:center;"><span style="font-family:Times New Roman,宋体;">No</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: middle; border-top-width: 1px; border-style: solid solid solid none; border-top-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);"><p style="text-align:center;"><span style="font-family:Times New Roman,宋体;">问题描述</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: middle; border-top-width: 1px; border-style: solid solid solid none; border-top-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);"><p style="text-align:center;"><span style="font-family:Times New Roman,宋体;">提出人</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: middle; border-top-width: 1px; border-style: solid solid solid none; border-top-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);"><p style="text-align:center;"><span style="font-family:Times New Roman,宋体;">处理方式/说明</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: middle; border-top-width: 1px; border-style: solid solid solid none; border-top-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);"><p style="text-align:center;"><span style="font-family:Times New Roman,宋体;">状态</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><span style="font-family:Times New Roman,宋体;">1</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><span style="font-family:Times New Roman,宋体;">Open</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><span style="font-family:Times New Roman,宋体;">2</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><span style="font-family:Times New Roman,宋体;">Close</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><span style="font-family:Times New Roman,宋体;">3</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p>&nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr style="height:0;"><td style="width:34px;border:none;"><br></td><td style="width:273px;border:none;"><br></td><td style="width:65px;border:none;"><br></td><td style="width:187px;border:none;"><br></td><td style="width:60px;border:none;"><br></td></tr></tbody></table><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">这里由技术委员会加入对以上系统设计的意见和建议, 方案的最终确定需要技术委员会的通过</span></p><h1 style="outlineLvl:0;text-align:justify;"><span style="font-family:Times New Roman;">8 </span><span style="font-family:Times New Roman,宋体;">设计评审意见</span></h1><table style="border-top:1px solid #000000;border-left:1px solid #000000;border-bottom:1px solid #000000;border-right:1px solid #000000;border-insideH:1px solid #000000;border-insideV:1px solid #000000;border-collapse:collapse;border:none;"><tbody><tr style="height:30px;" class="firstRow"><td style="width: 34px; vertical-align: middle; border: 1px solid rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);"><p style="text-align:center;"><span style="font-family:Times New Roman,宋体;">No</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: middle; border-top-width: 1px; border-style: solid solid solid none; border-top-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);"><p style="text-align:center;"><span style="font-family:Times New Roman,宋体;">​问题描述</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: middle; border-top-width: 1px; border-style: solid solid solid none; border-top-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);"><p style="text-align:center;"><span style="font-family:Times New Roman,宋体;">提出人</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: middle; border-top-width: 1px; border-style: solid solid solid none; border-top-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);"><p style="text-align:center;"><span style="font-family:Times New Roman,宋体;">处理方式/说明</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: middle; border-top-width: 1px; border-style: solid solid solid none; border-top-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all; background: rgb(192, 192, 192);"><p style="text-align:center;"><span style="font-family:Times New Roman,宋体;">状态</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><span style="font-family:Times New Roman,宋体;">1</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><span style="font-family:Times New Roman,宋体;">Open</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><span style="font-family:Times New Roman,宋体;">2</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><span style="font-family:Times New Roman,宋体;">Close</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><span style="font-family:Times New Roman,宋体;">3</span>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr><td style="width: 34px; vertical-align: middle; border-style: none solid solid; border-left-width: 1px; border-left-color: rgb(0, 0, 0); border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 273px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 65px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 187px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td><td style="width: 60px; vertical-align: top; border-style: none solid solid none; border-bottom-width: 1px; border-bottom-color: rgb(0, 0, 0); border-right-width: 1px; border-right-color: rgb(0, 0, 0); word-break: break-all;"><p><br>
                &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr style="height:0;"><td style="width:34px;border:none;"><br></td><td style="width:273px;border:none;"><br></td><td style="width:65px;border:none;"><br></td><td style="width:187px;border:none;"><br></td><td style="width:60px;border:none;"><br></td></tr></tbody></table><p><br></p><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">这里累计记录和跟踪该文档评审时发现的问题。</span></p><h1 style="outlineLvl:0;text-align:justify;"><span style="font-family:Times New Roman;">9 </span><span style="font-family:Times New Roman,宋体;">附件及参考资料</span></h1><p style="font-family:Arial,宋体;line-height:150%;text-align:justify;"><span style="font-family:Times New Roman,宋体;">填写文档相关的附件或参考资料。若是不常变更的文档（比如调研报告），建议以对象方式插入到该文档中。如是经常变更的文档（比如接口文档），建议在此列出文件名即可。</span></p><p><br></p><p><br></p><p style="text-align: justify;"><br></p>
            </li>
            <li>
                <h1 id="title-text" class="with-breadcrumbs" style="margin: 0px; padding: 0px; font-size: 24px; font-weight: normal; line-height: 1.25; text-align: center;">项目/迭代周报模板</h1>
                <p style="text-align: center;">Created by&nbsp;<span class="author">xxx</span>&nbsp;on&nbsp;Jul 17, 2014</p>
                <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; background-color: transparent;"><br></p>
                <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    重新拟定了项目负责人/敏捷迭代的scrummaster的项目周报模板。</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    周报发送时间是周四晚上，不晚于周五中午12:00</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">&nbsp;</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    <strong>项目/</strong><strong>迭代名称</strong>：XXX</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    <strong>项目/</strong><strong>迭代简介</strong>：</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">&nbsp; &nbsp;
                    &nbsp; 项目/迭代的scope介绍，如果是业务迭代，说明主要满足什么目标，主要有哪些需求场景；如果是技术改造，主要完成哪些问题的改进，大致通过什么技术手段实现；</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">&nbsp;</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    <strong>关键时间点：</strong></p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">需求评审&nbsp; 7.1
                    done//表示完成了</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">详细设计评审 7.7-&gt;7.10//表示排期调整，延期</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">上线步骤评审 7.14</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">最后一个story提测时间点
                    7.12</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">上线时间点 7.16</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">&nbsp;</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    <strong>本周进展：</strong></p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">&nbsp; &nbsp;
                    &nbsp; &nbsp;概要说明本周工作进展，含需求、详细、开发、测试关键进展和成果。</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">&nbsp; &nbsp;
                    &nbsp; &nbsp;<strong>延期</strong><strong>说明：</strong>&nbsp;</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    关键时间点延期说明，为什么会延期，什么原因导致，经验教训和改进建议是什么。</p>
                <ul style="margin-top: 10px;" class=" list-paddingleft-2">
                    <li><p><strong>风险说明：</strong></p></li>
                </ul>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    潜在会导致项目延期的关键点，如何解决的建议。</p>
                <ul style="margin-top: 10px;" class=" list-paddingleft-2">
                    <li><p><strong>技术考虑：</strong></p></li>
                </ul>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    技术架构合理性考虑，服务化复用考虑，以及技术的稳定性、性能、扩展性等的考虑</p>
                <ul style="margin-top: 10px;" class=" list-paddingleft-2">
                    <li><p><strong>业务考虑：</strong></p></li>
                </ul>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    需求设计是否合理，符合用户、市场需求？需求设计是否符合功能模块化？</p>
                <ul style="margin-top: 10px;" class=" list-paddingleft-2">
                    <li><p><strong>流程/</strong><strong>工作方式考虑：</strong></p></li>
                </ul>
                <p>1. PM、RD/FE、UE、QA、OP的合作，以及跨产品团队合作过程中，遇到什么问题，改进建议是什么<br></p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">2.
                    scrum执行中遇到什么问题，改进建议是什么</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    <strong>下周计划：</strong></p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;概要说明下周计划，含需求、详细、开发、测试的计划。</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">&nbsp;</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    <strong>story</strong><strong>进展详细说明：</strong></p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px; background-color: transparent;">
                    <strong><br></strong></p>
                <table>
                    <tbody>
                    <tr class="firstRow">
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">Story标题</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">负责人</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">开发</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">测试</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">提测时间</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">测试结束时间</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">进度/风险/依赖</p></td>
                    </tr>
                    <tr>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">Story1XXX</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><br></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">Done</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">Done</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top; word-break: break-all;"><br></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><br></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><br></td>
                    </tr>
                    <tr>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">Story2XXX</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><br></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">Done</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">Doing</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top; word-break: break-all;"><br></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><br></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><br></td>
                    </tr>
                    <tr>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">Story3XXX</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><br></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><p
                                style="background-color: transparent;">Doing</p></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><br></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><br></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top;"><br></td>
                        <td style="padding-top: 7px; padding-bottom: 7px; vertical-align: top; word-break: break-all;"><br></td>
                    </tr>
                    </tbody>
                </table>
            </li>
            <li>
                <h1 style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">本周工作</h1>
                <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;"><br></p>
                <table>
                    <tbody>
                    <tr class="firstRow">
                        <th style="border-top-color: rgb(221, 221, 221); padding-top: 7px; padding-bottom: 7px; vertical-align: top; background-color: rgb(240, 240, 240);">
                            项目名称
                        </th>
                        <th style="border-top-color: rgb(221, 221, 221); padding-top: 7px; padding-bottom: 7px; vertical-align: top; background-color: rgb(240, 240, 240);">
                            所占用时间
                        </th>
                        <th style="border-top-color: rgb(221, 221, 221); padding-top: 7px; padding-bottom: 7px; vertical-align: top; background-color: rgb(240, 240, 240);">
                            进度说明
                        </th>
                    </tr>
                    <tr>
                        <td style="border-top-color: rgb(221, 221, 221); padding-top: 7px; padding-bottom: 7px; vertical-align: top; word-break: break-all; ">
                            <br></td>
                        <td style="border-top-color: rgb(221, 221, 221); padding-top: 7px; padding-bottom: 7px; vertical-align: top; word-break: break-all;">
                            <br></td>
                        <td class="confluenceTh"
                            style="border-top-color: rgb(221, 221, 221); padding-top: 7px; padding-bottom: 7px; vertical-align: top; word-break: break-all; ">
                            <br></td>
                    </tr>
                    </tbody>
                </table>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px;">&nbsp;</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px;"><strong>所占用时间</strong>：</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px;">除明确排期邮件的项目外，都需要说明时间，单位时间：天</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px;"><strong>进度说明</strong>：</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px;">已完成——RD开发完成，并且自测通过</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px;">已提测——项目已提交QA</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px;">测试中——QA已经接手测试</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px;">待上线——已经达到上线状态</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px;">已上线——线上运行</p>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px;">&nbsp;</p>
                <h1 style="margin-top: 10px; margin-bottom: 0px; padding: 0px;">下周计划</h1>
                <p style="margin-top: 10px; margin-bottom: 0px; padding: 0px;">&nbsp;</p>
                <table class="confluenceTable">
                    <tbody>
                    <tr class="firstRow">
                        <th class="confluenceTh"
                            style="border-top-color: rgb(221, 221, 221); padding-top: 7px; padding-bottom: 7px; vertical-align: top; background-color: rgb(240, 240, 240);">
                            项目名称
                        </th>
                        <th class="confluenceTh"
                            style="border-top-color: rgb(221, 221, 221); padding-top: 7px; padding-bottom: 7px; vertical-align: top; background-color: rgb(240, 240, 240);">
                            进度说明
                        </th>
                    </tr>
                    <tr>
                        <td style="border-top-color: rgb(221, 221, 221); padding-top: 7px; padding-bottom: 7px; vertical-align: top; word-break: break-all; ">
                            <br></td>
                        <td style="border-top-color: rgb(221, 221, 221); padding-top: 7px; padding-bottom: 7px; vertical-align: top; word-break: break-all;">
                            <br></td>
                    </tr>
                    </tbody>
                </table>
                <p><br></p>
            </li>
        </ul>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
            }
        },
        mounted() {
            this.init()
            this.init2()
        },
        methods: {
            init() {
                var E = eEditor;
                E.ready(function () {
                    console.log('21212')
                    var et = this;
                    this.on('stateChange', function () {
                        if (et.queryCommandState('align-center')) {
                            console.log(2);
                        } else {
                            console.log(1);
                        }
                    });
                });

                var editor = new eEditor('editor-trigger');
                window.myditor = editor;



                /*$('#bold').on('click', function (e) {
                 editor.execCommand('align-center');
                 });*/

                console.log('复制')

                editor.create();

                $('#file').on('click', function () {
                    $('#operate').show();
                });

                $('#back').on('click', function () {
                    $('#operate').hide();
                });

                $('#insert-mark').on('click', function (e) {
                    $('#mark-box').dialog();
                });
                $('#mark-box').on('click', '.mark-list span', function (e) {
                    var text = $(this).text();
                    editor.command(e, 'insertHtml', text);

                    $('#mark-box').dialog('hide');
                });

                $('#template-list').on('click', '.item', function (e) {
                    if ($(this).index() === 0) {
                        editor.$txt.html('<p><br></p>');
                        $('#operate').hide();
                    } else {
                        $('#operate').hide();
                        var html = $('#template-doc-list').children('li').eq($(this).index() - 1).html() + '<p><br></p>';
                        editor.$txt.html(html); // TODO 重构
                        //editor.command(e, 'insertHtml', html);
                    }
                });

                $('#select-color').on('click', function (e) {
                    eui.color({
                        select: function (color) {
                            editor.command(e, 'forecolor', color);
                        }
                    })
                    //
                });

                $(document).on('keydown', function (e) {
                    console.log(e.keyCode)
                    switch (e.keyCode) {
                        case 83:
                            var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
                            saveAs(file);
                            return false;
                    }
                });
            },
            init2() {
                var editor = window.myditor;

                var E = window.eEditor;

                function quickUi(id, cmd, cmdName) {

                    var $btn = $('#' + id);
                    $btn.on('click', function (e) {
                        editor.execCommand(cmd);
                    });

                    E.ready(function () {
                        editor = this;
                        editor.on('stateChange', function () {
                            if (editor.queryCommandState(cmd)) {
                                $btn.addClass('active');
                            } else {
                                $btn.removeClass('active');
                            }
                        });
                    });
                }



                console.log('quickUi')
                quickUi('bold', 'bold');
                quickUi('italic', 'italic');
                quickUi('align-left', 'align-left');
                quickUi('align-right', 'align-right');
                quickUi('align-center', 'align-center');
                quickUi('underline', 'underline');
                quickUi('strikethrough', 'strikethrough');
                quickUi('undo', 'undo');
                quickUi('redo', 'redo');
                quickUi('unorderlist', 'unorderlist');
                quickUi('orderlist', 'orderlist');
                quickUi('subscript', 'subscript');
                quickUi('superscript', 'superscript');

                /*E.ready(function () {
                 editor = this;
                 this.on('stateChange', function () {
                 if (editor.queryCommandState('bold')) {
                 console.log(2);
                 } else {
                 console.log(1);
                 }
                 });
                 });*/
            }
        }
    }
</script>

<style scoped>
</style>
