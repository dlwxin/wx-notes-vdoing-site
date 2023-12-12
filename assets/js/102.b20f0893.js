(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{593:function(v,_,P){"use strict";P.r(_);var I=P(26),i=Object(I.a)({},(function(){var v=this,_=v.$createElement,P=v._self._c||_;return P("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[P("h2",{attrs:{id:"ipv6-的主要特点"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#ipv6-的主要特点"}},[v._v("#")]),v._v(" IPv6 的主要特点")]),v._v(" "),P("p",[v._v("解决 IP 地址耗尽问题的措施有以下三种")]),v._v(" "),P("ul",[P("li",[v._v("采用无类别编址 CIDR，使 IP 地址的分配更加合理")]),v._v(" "),P("li",[v._v("采用网络地址转换（NAT）方法以节省全球 IP 地址")]),v._v(" "),P("li",[v._v("采用具有更大地址空间的新版本的 IPv6。")])]),v._v(" "),P("p",[v._v("其中前两种方法只是延长了 IPv4 地址分配结束的时间，只有第三种方法从根本上解决了 IP 地址的耗尽问题。")]),v._v(" "),P("h3",{attrs:{id:"ipv6-的主要特点-2"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#ipv6-的主要特点-2"}},[v._v("#")]),v._v(" IPv6 的主要特点")]),v._v(" "),P("ol",[P("li",[v._v("更大的地址空间。IPv6 将地址从 IPv4 的 32 位增大到了 128 位。IPv6 的字节数（16B）是 IPv4 字节数（4B）的平方。")]),v._v(" "),P("li",[v._v("扩展的地址层次结构。")]),v._v(" "),P("li",[v._v("灵活的首部格式")]),v._v(" "),P("li",[v._v("改进的选项。")]),v._v(" "),P("li",[v._v("允许协议继续扩充。")]),v._v(" "),P("li",[v._v("支持即插即用（即自动配置）。")]),v._v(" "),P("li",[v._v("支持资源的预分配。")]),v._v(" "),P("li",[v._v("IPv6 只有在包的源结点才能分片，是端到端的，传输路径中的路由器不能分片，所以从一般意义上说，IPv6 不允许分片（不允许类似 IPv4 在路由分片）。")]),v._v(" "),P("li",[v._v("IPv6 首部长度必须是 8B 的整数倍，而 IPv4 首部是 4B 的整数倍。")]),v._v(" "),P("li",[v._v("增大了安全性。身份验证和保密功能是 IPv6 的关键特征。")])]),v._v(" "),P("p",[v._v("虽然 IPv6 与 IPv4 不兼容，但总体而言它与所有其他的因特网协议兼容，包括 TCP、UDP、 ICMP、IGMP、OSPF、BGP 和 DNS，只是在少数地方做了必要的修改（大部分是为了处理长的地址）。IPv6 相当好地满足了预定的目标，主要体现在")]),v._v(" "),P("ol",[P("li",[v._v("首先也是最重要的，IPv6 有比 IPv4 长得多的地址。IPv6 的地址用 16 个字节表示，地址空间是 IPv4 的 2"),P("sup",[v._v("128-32")]),v._v("=2"),P("sup",[v._v("96")]),v._v("倍，从长远来看，这些地址是绝对够用的。")]),v._v(" "),P("li",[v._v("简化了 IP 分组头，它包含 8 个域（IPv4 是 12 个域）。这一改变使得路由器能够更快地处理分组，从而可以改善吞吐率。")]),v._v(" "),P("li",[v._v("更好地支持选项。这一改变对新的分组首部很重要，因为一些从前必要的段现在变成了可选段。此外，表示选项的方式的改变还能加快分组的处理速度。")])]),v._v(" "),P("h2",{attrs:{id:"bipv6-地址"}},[P("a",{staticClass:"header-anchor",attrs:{href:"#bipv6-地址"}},[v._v("#")]),v._v(" bIPv6 地址")]),v._v(" "),P("p",[v._v("IPv6 数据报的目的地址可以是以下三种基本类型地址之一")]),v._v(" "),P("ol",[P("li",[v._v("单播。单播就是传统的点对点通信。")]),v._v(" "),P("li",[v._v("多播。多播是一点对多点的通信，分组被交付到一组计算机的每台计算机。")]),v._v(" "),P("li",[v._v("任播。这是 IPv6 增加的一种类型。任播的目的站是一组计算机，但数据报在交付时只交付其中的一台计算机，通常是距离最近的一台计算机。")])]),v._v(" "),P("p",[v._v("IPv4 地址通常使用点分十进制表示法。如果 IPv6 也使用这种表示法，那么地址书写起来将会相当长。在 IPv6 标准中指定了一种比较紧凑的表示法，即把地址中的每 4 位用一个十六进制数表示，并用冒号分隔每 16 位，如 "),P("code",[v._v("4BF5:AA12:0216:FEBC:BA5F:039A:BE9A:2170")]),v._v("。")]),v._v(" "),P("p",[v._v("通常可以把 IPv6 地址缩写成更紧凑的形式。当 16 位域的开头有一些 0 时，可以采用一种缩写表示法，但在域中必须至少有一个数字。例如，可以把地址 "),P("code",[v._v("4BF5:0000:0000:0000:BA5F:039A:000A:2176")]),v._v(" 缩写为 "),P("code",[v._v("4BF5:0:0:0:BA5F:39A:A:2176")]),v._v("。")]),v._v(" "),P("p",[v._v("当有相继的 0 值域时，还可以进一步缩写。这些域可以用双冒号缩写（::）。当然，双冒号表示法在一个地址中仅能出现一次，因为 0 值域的个数没有编码，需要从指定的总的域的个数来推算。这样一来，前述地址可被更紧凑地书写成 "),P("code",[v._v("4BF5::BA5F:39A:A:2176")]),v._v("。")]),v._v(" "),P("p",[v._v("IPv6 扩展了 IPv4 地址的分级概念，它使用以下 3 个等级：第一级（顶级）指明全球都知道的公共拓扑；第二级（场点级）指明单个场点；第三级指明单个网络接口。IPv6 地址采用多级体系主要是为了使路由器能够更快地查找路由。")]),v._v(" "),P("p",[v._v("IPv4 向 IPv6 过渡只能采用逐步演进的办法，同时还必须使新安装的 IPv6 系统能够向后兼容。 IPv6 系统必须能够接收和转发 IPv4 分组，并且能够为 IPv4 分组选择路由。")]),v._v(" "),P("p",[v._v("IPv4 向 IPv6 过渡可以采用双协议栈和隧道技术两种策略：双协议栈技术是指在一台设备上同时装有 IPv4 和 IPv6 协议栈，那么这台设备既能和 IPv4 网络通信，又能和 IPv6 网络通信。如果这台设备是一个路由器，那么在路由器的不同接口上分别配置了 IPv4 地址和 IPv6 地址，并很可能分别连接了 IPv4 网络和 IPv6 网络；如果这台设备是一台计算机，那么它将同时拥有 IPv4 地址和 IPv6 地址，并具备同时处理这两个协议地址的功能。隧道技术是将整个 IPv6 数据报封装到 IPv4 数据报的数据部分，使得 IPv6 数据报可以在 IPv4 网络的隧道中传输。")])])}),[],!1,null,null,null);_.default=i.exports}}]);