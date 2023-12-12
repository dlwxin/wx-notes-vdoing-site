(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{595:function(e,s,a){"use strict";a.r(s);var n=a(26),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"https://www.runoob.com/w3cnote/https-ssl-intro.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTPS 与 SSL 证书概要"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to create an https server?"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1160294",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何为 Nginx 创建自签名 SSL 证书"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/67e7e860d000",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx 配置自签名 https"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://geekflare.com/openssl-commands-certificates/",target:"_blank",rel:"noopener noreferrer"}},[e._v("21 OpenSSL Examples to Help You in Real-World"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"create-self-signed-certificate-for-nginx-on-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-self-signed-certificate-for-nginx-on-windows"}},[e._v("#")]),e._v(" Create Self Signed Certificate for Nginx on Windows")]),e._v(" "),a("h3",{attrs:{id:"创建-ssl-证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-ssl-证书"}},[e._v("#")]),e._v(" 创建 SSL 证书")]),e._v(" "),a("p",[e._v("TLS/SSL 通过公共证书和密钥的相互结合来运行。SSL 密钥在服务器上保密。它用于加密发送给客户端的内容。SSL 证书与任何请求获得内容的人共享。它可用于解密由关联的 SSL 密钥签名的内容。")]),e._v(" "),a("p",[e._v("我们可以在命令中使用 "),a("code",[e._v("OpenSSL")]),e._v(" 创建自签名密钥和证书：")]),e._v(" "),a("p",[e._v("NB: 如果已经装了 "),a("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),a("OutboundLink")],1),e._v(" 客户端。可以直接使用 "),a("code",[e._v("OpenSSL")]),e._v(" 命令。不需要单独安装 "),a("code",[e._v("OpenSSL")])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("openssl req -x509 -nodes -days "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("365")]),e._v(" -newkey rsa:2048 -keyout ./nginx-selfsigned.key -out ./nginx-selfsigned.crt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("openssl req -x509 -days "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("365")]),e._v(" -nodes -newkey rsa:2048 -keyout private.key -out certificate.crt -subj "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/C=US/ST=State/L=City/O=Organization/CN=example.com"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("openssl")]),e._v("：这是用于创建和管理 "),a("code",[e._v("OpenSSL")]),e._v(" 证书、密钥和其他文件的基本命令工具。")]),e._v(" "),a("li",[a("code",[e._v("req")]),e._v("：此子命令指定我们要使用 X.509 证书签名请求管理。“X.509”是 SSL 和 TLS 为其密钥和证书管理所遵循的公钥基础结构标准。我们想要创建一个新的 X.509 证书，所以我们使用这个子命令。")]),e._v(" "),a("li",[a("code",[e._v("-x509")]),e._v("：这通过告诉实用程序我们要创建自签名证书而不是生成证书签名请求来进一步修改上一个子命令。")]),e._v(" "),a("li",[a("code",[e._v("-nodes")]),e._v("：这告诉 "),a("code",[e._v("OpenSSL")]),e._v(" 跳过用密码保护我们的证书的选项。当服务器启动时，我们需要 Nginx 能够在没有用户干预的情况下读取文件。密码短语会阻止这种情况发生，因为我们必须在每次重启后输入密码。")]),e._v(" "),a("li",[a("code",[e._v("-days 365")]),e._v("：此选项设置证书的有效时间长度。我们在这里设置了一年。")]),e._v(" "),a("li",[a("code",[e._v("-newkey rsa")]),e._v("：2048：这指定我们要同时生成新证书和新密钥。我们没有创建在上一步中签署证书所需的密钥，因此我们需要将其与证书一起创建。该 rsa:2048 部分告诉它制作一个 2048 位长的 RSA 密钥。")]),e._v(" "),a("li",[a("code",[e._v("-keyout")]),e._v("：这一行告诉 "),a("code",[e._v("OpenSSL")]),e._v(" 在哪里放置我们正在创建的生成的私钥文件。")]),e._v(" "),a("li",[a("code",[e._v("-out")]),e._v("：这告诉 "),a("code",[e._v("OpenSSL")]),e._v(" 在哪里放置我们正在创建的证书。")])]),e._v(" "),a("p",[e._v("如上所述，这些选项将创建密钥文件和证书。我们将询问有关我们服务器的一些问题，以便将信息正确地填入到证书中。")]),e._v(" "),a("p",[e._v("最重要的一行是请求 "),a("strong",[e._v("Common Name (e.g. server FQDN or YOUR name)")]),e._v(" 您需要输入与服务器关联的域名，或者是您服务器的公共 IP 地址。")]),e._v(" "),a("p",[e._v("如果是本地的话，可以写 "),a("code",[e._v("localhost")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Country Name (2 letter code) [AU]:US\nState or Province Name (full name) [Some-State]:New York\nLocality Name (eg, city) []:New York City\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:Bouncy Castles, Inc.\nOrganizational Unit Name (eg, section) []:Ministry of Water Slides\nCommon Name (e.g. server FQDN or YOUR name) []:server_IP_address\nEmail Address []:admin@your_domain.com\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h3",{attrs:{id:"配置-nginx-以使用-ssl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-以使用-ssl"}},[e._v("#")]),e._v(" 配置 Nginx 以使用 SSL")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("首先，我们将 "),a("code",[e._v("nginx-selfsigned.crt")]),e._v(" 和 "),a("code",[e._v("nginx-selfsigned.key")]),e._v(" 拷贝到 "),a("code",[e._v("$NGINX_HOME/cert")]),e._v(" 目录下")])]),e._v(" "),a("li",[a("p",[e._v("其次，在 Nginx 的配置中添加如下配置：")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server {\n    #listen       80;\n    #listen       443 ssl;\n    listen       8099 ssl;\n    server_name  localhost;\n\n    ssl on;\n    ssl_certificate      ../cert/nginx-selfsigned.crt;\n    ssl_certificate_key  ../cert/nginx-selfsigned.key;\n\n    ssl_session_timeout        5m;\n    ssl_session_cache          shared:SSL:1m;\n    ssl_ciphers                HIGH:!aNULL:!MD5;\n    ssl_prefer_server_ciphers  on;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("ul",[a("li",[e._v("最后 Reload Nginx")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nginx -s reload\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"身份验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#身份验证"}},[e._v("#")]),e._v(" 身份验证")]),e._v(" "),a("ul",[a("li",[e._v("公钥加密，私钥解密。作用加密信息")]),e._v(" "),a("li",[e._v("私钥加密，公钥解密。作用是身份验证")])]),e._v(" "),a("h2",{attrs:{id:"摘要算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#摘要算法"}},[e._v("#")]),e._v(" 摘要算法")]),e._v(" "),a("p",[e._v("作用：保证信息的完整性，防篡改。")]),e._v(" "),a("h2",{attrs:{id:"生成-ssh-私钥和公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-ssh-私钥和公钥"}},[e._v("#")]),e._v(" 生成 SSH 私钥和公钥")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("ssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v("\n\nssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v(" -C "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"your_email@example.com"')]),e._v(" -f /path/to/keyfile\n\nssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v(" -P "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),e._v(" -f /path/to/keyfile\n\nssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v(" -P "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"888"')]),e._v(" -f /path/to/keyfile\nssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v(" -N "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"888"')]),e._v(" -f /path/to/keyfile\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("ul",[a("li",[a("code",[e._v('-C "your_email@example.com"')]),e._v("：这个选项允许你为密钥指定一个注释或标识符。在这里，我们将其设置为你的电子邮件地址。你可以将其替换为你自己的注释。")]),e._v(" "),a("li",[a("code",[e._v("-f /path/to/keyfile")]),e._v("：这个选项允许你指定密钥文件的保存路径和文件名。在这里，我们将其设置为"),a("code",[e._v("/path/to/keyfile")]),e._v("。你可以将其替换为你想要的文件路径和名称。")]),e._v(" "),a("li",[a("code",[e._v('-P ""')]),e._v(": 选项来设置一个空密码")]),e._v(" "),a("li",[a("code",[e._v("-N passphrase")]),e._v("：设置私钥的密码短语（即加密私钥时使用的密码）")])]),e._v(" "),a("p",[e._v("在 SSH 密钥对中，注释（comment）信息只存在于公钥文件（.pub 文件）中，而私钥文件中不包含注释信息。")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC12345"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". your_email@example.com\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"csr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csr"}},[e._v("#")]),e._v(" CSR")]),e._v(" "),a("h3",{attrs:{id:"csr-和-ssl-证书的关系是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csr-和-ssl-证书的关系是什么"}},[e._v("#")]),e._v(" csr 和 ssl 证书的关系是什么")]),e._v(" "),a("p",[e._v("CSR(Certificate Signing Request)证书签名请求和 SSL 证书之间的关系是:")]),e._v(" "),a("ul",[a("li",[e._v("CSR 是申请 SSL 证书的第一步。CSR 文件包含了公钥和组织身份信息,是申请 SSL 证书过程中的一个中间文件。")]),e._v(" "),a("li",[e._v("CA 机构(证书颁发机构)在颁发 SSL 证书之前,会要求申请者提交 CSR 文件。CA 机构会验证 CSR 文件中的信息,如果信息真实有效,则会使用其根证书对 CSR 文件进行签名,生成 SSL 证书。")]),e._v(" "),a("li",[e._v("所以 CSR 文件是申请 SSL 证书的必要步骤。没有 CSR 文件,CA 机构无法验证申请者的身份信息和公钥,也就无法颁发 SSL 证书。CSR 文件起到连接申请者和 CA 机构的桥梁作用。")])]),e._v(" "),a("p",[e._v("一句话总结:CSR 文件包含申请 SSL 证书所需的公钥和身份信息,是申请 SSL 证书的必要步骤和中间文件。CA 机构通过验证 CSR 文件来生成最终的 SSL 证书。")]),e._v(" "),a("h3",{attrs:{id:"csr-会生成私钥吗-生成证书是什么格式的-可以随意分发吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csr-会生成私钥吗-生成证书是什么格式的-可以随意分发吗"}},[e._v("#")]),e._v(" CSR 会生成私钥吗， 生成证书是什么格式的， 可以随意分发吗")]),e._v(" "),a("p",[e._v("CSR(证书签名请求)文件本身不包含私钥,但是在生成 CSR 文件的时候需要事先准备好私钥。具体来说:")]),e._v(" "),a("ul",[a("li",[e._v("CSR 生成时需要申请者自己先生成一对公私钥,然后把包含公钥信息的 CSR 发送给 CA 机构,而私钥需要自己妥善保管。")]),e._v(" "),a("li",[e._v("CSR 文件一般根据"),a("code",[e._v("PKCS#10")]),e._v("标准生成,文件格式为 PEM 或 DER 编码的证书签名请求。")]),e._v(" "),a("li",[e._v("CA 机构在验证 CSR 文件后,会生成 X.509 格式的 SSL 证书,并将其发送给申请者。")]),e._v(" "),a("li",[e._v("生成的 SSL 证书中不包含私钥信息,需要申请者拿着 CA 机构签发的证书和自己保管的私钥一起部署使用。")]),e._v(" "),a("li",[e._v("由 CA 机构签发的 SSL 证书可以在互联网环境下较为安全可靠的传输,但是私钥不能随意分发,需要申请者自己妥善保管,避免泄露。")])]),e._v(" "),a("p",[e._v("所以总结一下:CSR 文件不包含私钥,私钥需要申请者自己生成并保管;CSR 申请获得的 SSL 证书可以分发使用,但不能分发私钥。")]),e._v(" "),a("h3",{attrs:{id:"公钥和证书的的区别是什么-有证书后-公钥还有用吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公钥和证书的的区别是什么-有证书后-公钥还有用吗"}},[e._v("#")]),e._v(" 公钥和证书的的区别是什么， 有证书后， 公钥还有用吗")]),e._v(" "),a("p",[e._v("公钥和证书的主要区别在于:")]),e._v(" "),a("ul",[a("li",[e._v("公钥只包含加密/验证算法所使用的公开密钥信息,而证书中除了包含公钥信息外,还绑定了使用该公钥的实体身份信息,由证书颁发机构(CA)进行数字签名。")]),e._v(" "),a("li",[e._v("只使用裸公钥,客户端很难确定公钥的真实性和有效性。而证书通过 CA 的签名,提供了公钥可信赖性的保证,客户端只需要信任 CA,就可以间接信任证书所含公钥。")]),e._v(" "),a("li",[e._v("公钥主要用于加密信息或者验证数字签名,而证书则主要用于绑定身份,并为公钥提供保证。许多安全协议需要使用证书,直接使用公钥是不够的。")]),e._v(" "),a("li",[e._v("获取证书后,公钥本身并不会丧失作用,解密证书可以获取公钥信息。但在很多应用场景下,需要使用证书而不是直接使用裸公钥,以确保安全。")])]),e._v(" "),a("p",[e._v("总的来说,证书可以看作是对公钥进行了数字签名并加上身份信息的数据格式,在实际应用中使用证书可以提供比裸公钥更强更全面的安全保障。所以有了证书之后,公钥通常作为证书内容存在,而不会单独使用。")])])}),[],!1,null,null,null);s.default=t.exports}}]);