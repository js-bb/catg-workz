/* eslint-disable jsx-a11y/alt-text */
import { type ComponentPropsWithRef, type ElementType, type Ref } from 'react';

export type El<T extends ElementType = any> = 0 extends 1 & T
	? ComponentPropsWithRef<'b'> & { ref?: Ref<any> }
	: ComponentPropsWithRef<T>;

export const a = (props: El<'a'>) => <a {...props} />;
a.generic = (props: El) => <a {...(props as El<'a'>)} />;

export const abbr = (props: El<'abbr'>) => <abbr {...props} />;
abbr.generic = (props: El) => <abbr {...(props as El<'abbr'>)} />;

export const address = (props: El<'address'>) => <address {...props} />;
address.generic = (props: El) => <address {...(props as El<'address'>)} />;

export const area = (props: El<'area'>) => <area {...props} />;
area.generic = (props: El) => <area {...(props as El<'area'>)} />;

export const article = (props: El<'article'>) => <article {...props} />;
article.generic = (props: El) => <article {...(props as El<'article'>)} />;

export const aside = (props: El<'aside'>) => <aside {...props} />;
aside.generic = (props: El) => <aside {...(props as El<'aside'>)} />;

export const audio = (props: El<'audio'>) => <audio {...props} />;
audio.generic = (props: El) => <audio {...(props as El<'audio'>)} />;

export const b = (props: El<'b'>) => <b {...props} />;
b.generic = (props: El) => <b {...(props as El<'b'>)} />;

export const base = (props: El<'base'>) => <base {...props} />;
base.generic = (props: El) => <base {...(props as El<'base'>)} />;

export const bdi = (props: El<'bdi'>) => <bdi {...props} />;
bdi.generic = (props: El) => <bdi {...(props as El<'bdi'>)} />;

export const bdo = (props: El<'bdo'>) => <bdo {...props} />;
bdo.generic = (props: El) => <bdo {...(props as El<'bdo'>)} />;

export const big = (props: El<'big'>) => <big {...props} />;
big.generic = (props: El) => <big {...(props as El<'big'>)} />;

export const blockquote = (props: El<'blockquote'>) => (
	<blockquote {...props} />
);
blockquote.generic = (props: El) => (
	<blockquote {...(props as El<'blockquote'>)} />
);

export const body = (props: El<'body'>) => <body {...props} />;
body.generic = (props: El) => <body {...(props as El<'body'>)} />;

export const br = (props: El<'br'>) => <br {...props} />;
br.generic = (props: El) => <br {...(props as El<'br'>)} />;

export const button = (props: El<'button'>) => <button {...props} />;
button.generic = (props: El) => <button {...(props as El<'button'>)} />;

export const canvas = (props: El<'canvas'>) => <canvas {...props} />;
canvas.generic = (props: El) => <canvas {...(props as El<'canvas'>)} />;

export const caption = (props: El<'caption'>) => <caption {...props} />;
caption.generic = (props: El) => <caption {...(props as El<'caption'>)} />;

export const cite = (props: El<'cite'>) => <cite {...props} />;
cite.generic = (props: El) => <cite {...(props as El<'cite'>)} />;

export const code = (props: El<'code'>) => <code {...props} />;
code.generic = (props: El) => <code {...(props as El<'code'>)} />;

export const col = (props: El<'col'>) => <col {...props} />;
col.generic = (props: El) => <col {...(props as El<'col'>)} />;

export const colgroup = (props: El<'colgroup'>) => <colgroup {...props} />;
colgroup.generic = (props: El) => <colgroup {...(props as El<'colgroup'>)} />;

export const data = (props: El<'data'>) => <data {...props} />;
data.generic = (props: El) => <data {...(props as El<'data'>)} />;

export const datalist = (props: El<'datalist'>) => <datalist {...props} />;
datalist.generic = (props: El) => <datalist {...(props as El<'datalist'>)} />;

export const dd = (props: El<'dd'>) => <dd {...props} />;
dd.generic = (props: El) => <dd {...(props as El<'dd'>)} />;

export const del = (props: El<'del'>) => <del {...props} />;
del.generic = (props: El) => <del {...(props as El<'del'>)} />;

export const details = (props: El<'details'>) => <details {...props} />;
details.generic = (props: El) => <details {...(props as El<'details'>)} />;

export const dfn = (props: El<'dfn'>) => <dfn {...props} />;
dfn.generic = (props: El) => <dfn {...(props as El<'dfn'>)} />;

export const dialog = (props: El<'dialog'>) => <dialog {...props} />;
dialog.generic = (props: El) => <dialog {...(props as El<'dialog'>)} />;

export const div = (props: El<'div'>) => <div {...props} />;
div.generic = (props: El) => <div {...(props as El<'div'>)} />;

export const dl = (props: El<'dl'>) => <dl {...props} />;
dl.generic = (props: El) => <dl {...(props as El<'dl'>)} />;

export const dt = (props: El<'dt'>) => <dt {...props} />;
dt.generic = (props: El) => <dt {...(props as El<'dt'>)} />;

export const em = (props: El<'em'>) => <em {...props} />;
em.generic = (props: El) => <em {...(props as El<'em'>)} />;

export const embed = (props: El<'embed'>) => <embed {...props} />;
embed.generic = (props: El) => <embed {...(props as El<'embed'>)} />;

export const fieldset = (props: El<'fieldset'>) => <fieldset {...props} />;
fieldset.generic = (props: El) => <fieldset {...(props as El<'fieldset'>)} />;

export const figcaption = (props: El<'figcaption'>) => (
	<figcaption {...props} />
);
figcaption.generic = (props: El) => (
	<figcaption {...(props as El<'figcaption'>)} />
);

export const figure = (props: El<'figure'>) => <figure {...props} />;
figure.generic = (props: El) => <figure {...(props as El<'figure'>)} />;

export const footer = (props: El<'footer'>) => <footer {...props} />;
footer.generic = (props: El) => <footer {...(props as El<'footer'>)} />;

export const form = (props: El<'form'>) => <form {...props} />;
form.generic = (props: El) => <form {...(props as El<'form'>)} />;

export const h1 = (props: El<'h1'>) => <h1 {...props} />;
h1.generic = (props: El) => <h1 {...(props as El<'h1'>)} />;

export const h2 = (props: El<'h2'>) => <h2 {...props} />;
h2.generic = (props: El) => <h2 {...(props as El<'h2'>)} />;

export const h3 = (props: El<'h3'>) => <h3 {...props} />;
h3.generic = (props: El) => <h3 {...(props as El<'h3'>)} />;

export const h4 = (props: El<'h4'>) => <h4 {...props} />;
h4.generic = (props: El) => <h4 {...(props as El<'h4'>)} />;

export const h5 = (props: El<'h5'>) => <h5 {...props} />;
h5.generic = (props: El) => <h5 {...(props as El<'h5'>)} />;

export const h6 = (props: El<'h6'>) => <h6 {...props} />;
h6.generic = (props: El) => <h6 {...(props as El<'h6'>)} />;

export const head = (props: El<'head'>) => <head {...props} />;
head.generic = (props: El) => <head {...(props as El<'head'>)} />;

export const header = (props: El<'header'>) => <header {...props} />;
header.generic = (props: El) => <header {...(props as El<'header'>)} />;

export const hgroup = (props: El<'hgroup'>) => <hgroup {...props} />;
hgroup.generic = (props: El) => <hgroup {...(props as El<'hgroup'>)} />;

export const hr = (props: El<'hr'>) => <hr {...props} />;
hr.generic = (props: El) => <hr {...(props as El<'hr'>)} />;

export const html = (props: El<'html'>) => <html {...props} />;
html.generic = (props: El) => <html {...(props as El<'html'>)} />;

export const i = (props: El<'i'>) => <i {...props} />;
i.generic = (props: El) => <i {...(props as El<'i'>)} />;

export const iframe = (props: El<'iframe'>) => <iframe {...props} />;
iframe.generic = (props: El) => <iframe {...(props as El<'iframe'>)} />;

export const img = (props: El<'img'>) => <img {...props} />;
img.generic = (props: El) => <img {...(props as El<'img'>)} />;

export const input = (props: El<'input'>) => <input {...props} />;
input.generic = (props: El) => <input {...(props as El<'input'>)} />;

export const ins = (props: El<'ins'>) => <ins {...props} />;
ins.generic = (props: El) => <ins {...(props as El<'ins'>)} />;

export const kbd = (props: El<'kbd'>) => <kbd {...props} />;
kbd.generic = (props: El) => <kbd {...(props as El<'kbd'>)} />;

export const keygen = (props: El<'keygen'>) => <keygen {...props} />;
keygen.generic = (props: El) => <keygen {...(props as El<'keygen'>)} />;

export const label = (props: El<'label'>) => <label {...props} />;
label.generic = (props: El) => <label {...(props as El<'label'>)} />;

export const legend = (props: El<'legend'>) => <legend {...props} />;
legend.generic = (props: El) => <legend {...(props as El<'legend'>)} />;

export const li = (props: El<'li'>) => <li {...props} />;
li.generic = (props: El) => <li {...(props as El<'li'>)} />;

export const link = (props: El<'link'>) => <link {...props} />;
link.generic = (props: El) => <link {...(props as El<'link'>)} />;

export const main = (props: El<'main'>) => <main {...props} />;
main.generic = (props: El) => <main {...(props as El<'main'>)} />;

export const map = (props: El<'map'>) => <map {...props} />;
map.generic = (props: El) => <map {...(props as El<'map'>)} />;

export const mark = (props: El<'mark'>) => <mark {...props} />;
mark.generic = (props: El) => <mark {...(props as El<'mark'>)} />;

export const menu = (props: El<'menu'>) => <menu {...props} />;
menu.generic = (props: El) => <menu {...(props as El<'menu'>)} />;

export const menuitem = (props: El<'menuitem'>) => <menuitem {...props} />;
menuitem.generic = (props: El) => <menuitem {...(props as El<'menuitem'>)} />;

export const meta = (props: El<'meta'>) => <meta {...props} />;
meta.generic = (props: El) => <meta {...(props as El<'meta'>)} />;

export const meter = (props: El<'meter'>) => <meter {...props} />;
meter.generic = (props: El) => <meter {...(props as El<'meter'>)} />;

export const nav = (props: El<'nav'>) => <nav {...props} />;
nav.generic = (props: El) => <nav {...(props as El<'nav'>)} />;

export const noscript = (props: El<'noscript'>) => <noscript {...props} />;
noscript.generic = (props: El) => <noscript {...(props as El<'noscript'>)} />;

export const object = (props: El<'object'>) => <object {...props} />;
object.generic = (props: El) => <object {...(props as El<'object'>)} />;

export const ol = (props: El<'ol'>) => <ol {...props} />;
ol.generic = (props: El) => <ol {...(props as El<'ol'>)} />;

export const optgroup = (props: El<'optgroup'>) => <optgroup {...props} />;
optgroup.generic = (props: El) => <optgroup {...(props as El<'optgroup'>)} />;

export const option = (props: El<'option'>) => <option {...props} />;
option.generic = (props: El) => <option {...(props as El<'option'>)} />;

export const output = (props: El<'output'>) => <output {...props} />;
output.generic = (props: El) => <output {...(props as El<'output'>)} />;

export const p = (props: El<'p'>) => <p {...props} />;
p.generic = (props: El) => <p {...(props as El<'p'>)} />;

export const param = (props: El<'param'>) => <param {...props} />;
param.generic = (props: El) => <param {...(props as El<'param'>)} />;

export const picture = (props: El<'picture'>) => <picture {...props} />;
picture.generic = (props: El) => <picture {...(props as El<'picture'>)} />;

export const pre = (props: El<'pre'>) => <pre {...props} />;
pre.generic = (props: El) => <pre {...(props as El<'pre'>)} />;

export const progress = (props: El<'progress'>) => <progress {...props} />;
progress.generic = (props: El) => <progress {...(props as El<'progress'>)} />;

export const q = (props: El<'q'>) => <q {...props} />;
q.generic = (props: El) => <q {...(props as El<'q'>)} />;

export const rp = (props: El<'rp'>) => <rp {...props} />;
rp.generic = (props: El) => <rp {...(props as El<'rp'>)} />;

export const rt = (props: El<'rt'>) => <rt {...props} />;
rt.generic = (props: El) => <rt {...(props as El<'rt'>)} />;

export const ruby = (props: El<'ruby'>) => <ruby {...props} />;
ruby.generic = (props: El) => <ruby {...(props as El<'ruby'>)} />;

export const s = (props: El<'s'>) => <s {...props} />;
s.generic = (props: El) => <s {...(props as El<'s'>)} />;

export const samp = (props: El<'samp'>) => <samp {...props} />;
samp.generic = (props: El) => <samp {...(props as El<'samp'>)} />;

export const script = (props: El<'script'>) => <script {...props} />;
script.generic = (props: El) => <script {...(props as El<'script'>)} />;

export const section = (props: El<'section'>) => <section {...props} />;
section.generic = (props: El) => <section {...(props as El<'section'>)} />;

export const select = (props: El<'select'>) => <select {...props} />;
select.generic = (props: El) => <select {...(props as El<'select'>)} />;

export const small = (props: El<'small'>) => <small {...props} />;
small.generic = (props: El) => <small {...(props as El<'small'>)} />;

export const source = (props: El<'source'>) => <source {...props} />;
source.generic = (props: El) => <source {...(props as El<'source'>)} />;

export const span = (props: El<'span'>) => <span {...props} />;
span.generic = (props: El) => <span {...(props as El<'span'>)} />;

export const strong = (props: El<'strong'>) => <strong {...props} />;
strong.generic = (props: El) => <strong {...(props as El<'strong'>)} />;

export const style = (props: El<'style'>) => <style {...props} />;
style.generic = (props: El) => <style {...(props as El<'style'>)} />;

export const sub = (props: El<'sub'>) => <sub {...props} />;
sub.generic = (props: El) => <sub {...(props as El<'sub'>)} />;

export const summary = (props: El<'summary'>) => <summary {...props} />;
summary.generic = (props: El) => <summary {...(props as El<'summary'>)} />;

export const sup = (props: El<'sup'>) => <sup {...props} />;
sup.generic = (props: El) => <sup {...(props as El<'sup'>)} />;

export const table = (props: El<'table'>) => <table {...props} />;
table.generic = (props: El) => <table {...(props as El<'table'>)} />;

export const tbody = (props: El<'tbody'>) => <tbody {...props} />;
tbody.generic = (props: El) => <tbody {...(props as El<'tbody'>)} />;

export const td = (props: El<'td'>) => <td {...props} />;
td.generic = (props: El) => <td {...(props as El<'td'>)} />;

export const textarea = (props: El<'textarea'>) => <textarea {...props} />;
textarea.generic = (props: El) => <textarea {...(props as El<'textarea'>)} />;

export const tfoot = (props: El<'tfoot'>) => <tfoot {...props} />;
tfoot.generic = (props: El) => <tfoot {...(props as El<'tfoot'>)} />;

export const th = (props: El<'th'>) => <th {...props} />;
th.generic = (props: El) => <th {...(props as El<'th'>)} />;

export const thead = (props: El<'thead'>) => <thead {...props} />;
thead.generic = (props: El) => <thead {...(props as El<'thead'>)} />;

export const time = (props: El<'time'>) => <time {...props} />;
time.generic = (props: El) => <time {...(props as El<'time'>)} />;

export const title = (props: El<'title'>) => <title {...props} />;
title.generic = (props: El) => <title {...(props as El<'title'>)} />;

export const tr = (props: El<'tr'>) => <tr {...props} />;
tr.generic = (props: El) => <tr {...(props as El<'tr'>)} />;

export const track = (props: El<'track'>) => <track {...props} />;
track.generic = (props: El) => <track {...(props as El<'track'>)} />;

export const u = (props: El<'u'>) => <u {...props} />;
u.generic = (props: El) => <u {...(props as El<'u'>)} />;

export const ul = (props: El<'ul'>) => <ul {...props} />;
ul.generic = (props: El) => <ul {...(props as El<'ul'>)} />;

export const varElement = (props: El<'var'>) => <var {...props} />;
varElement.generic = (props: El) => <var {...(props as El<'var'>)} />;

export const video = (props: El<'video'>) => <video {...props} />;
video.generic = (props: El) => <video {...(props as El<'video'>)} />;

export const wbr = (props: El<'wbr'>) => <wbr {...props} />;
wbr.generic = (props: El) => <wbr {...(props as El<'wbr'>)} />;
