import{v4 as d}from"https://jspm.dev/uuid";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}})();const a=[{handle:"@TrollBot66756542 💎",profilePic:"/images/troll.jpg",likes:27,retweets:10,tweetText:`Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,replies:[],isLiked:!1,isRetweeted:!1,uuid:"4b161eee-c0f5-4545-9c4b-8562944223ee"},{handle:"@Elon ✅",profilePic:"/images/musk.png",likes:6500,retweets:234,tweetText:"I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀",replies:[{handle:"@TomCruise ✅",profilePic:"/images/tcruise.png",tweetText:"Yes! Sign me up! 😎🛩"},{handle:"@ChuckNorris ✅",profilePic:"/images/chucknorris.jpeg",tweetText:"I went last year😴"}],isLiked:!1,isRetweeted:!1,uuid:"3c23454ee-c0f5-9g9g-9c4b-77835tgs2"},{handle:"@NoobCoder12",profilePic:"/images/flower.png",likes:10,retweets:3,tweetText:"Are you a coder if you only know HTML?",replies:[{handle:"@StackOverflower ☣️",profilePic:"/images/overflow.png",tweetText:"No. Obviosuly not. Go get a job in McDonald's."},{handle:"@YummyCoder64",profilePic:"/images/love.png",tweetText:"You are wonderful just as you are! ❤️"}],isLiked:!1,isRetweeted:!1,uuid:"8hy671sff-c0f5-4545-9c4b-1237gyys45"}];document.addEventListener("click",function(t){t.target.dataset.like?c(t.target.dataset.like):t.target.dataset.retweet?u(t.target.dataset.retweet):t.target.dataset.reply?f(t.target.dataset.reply):t.target.id==="tweet-btn"?g():t.target.id==="reply-btn"&&p(t.target.dataset.postReply)});function c(t){const e=a.filter(function(l){return l.uuid===t})[0];e.isLiked?e.likes--:e.likes++,e.isLiked=!e.isLiked,n()}function u(t){const e=a.filter(function(l){return l.uuid===t})[0];e.isRetweeted?e.retweets--:e.retweets++,e.isRetweeted=!e.isRetweeted,n()}function f(t){document.getElementById(`replies-${t}`).classList.toggle("hidden")}function p(t){const e=document.getElementById(`reply-input-${t}`),l=a.filter(function(r){return r.uuid===t})[0];e.value&&(l.replies.push({handle:"@scrimba",profilePic:"images/scrimbalogo.png",tweetText:e.value}),n())}function g(){const t=document.getElementById("tweet-input");t.value&&(a.unshift({handle:"@Scrimba",profilePic:"images/scrimbalogo.png",likes:0,retweets:0,tweetText:t.value,replies:[],isLiked:!1,isRetweeted:!1,uuid:d()}),n(),t.value="")}function m(){let t="";return a.forEach(function(e){let l="";e.isLiked&&(l="liked");let r="";e.isRetweeted&&(r="retweeted");let i="";e.replies.length>0&&e.replies.forEach(function(s){i+=`
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${s.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${s.handle}</p>
                <p class="tweet-text">${s.tweetText}</p>
            </div>
        </div>
</div>
`}),t+=`
<div class="tweet">
    <div class="tweet-inner">
        <img src="${e.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${e.handle}</p>
            <p class="tweet-text">${e.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${e.uuid}"
                    ></i>
                    ${e.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${l}"
                    data-like="${e.uuid}"
                    ></i>
                    ${e.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${r}"
                    data-retweet="${e.uuid}"
                    ></i>
                    ${e.retweets}
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${e.uuid}">
        ${i}
        <div class="reply-input-area tweet-reply">
            <div class="tweet-inner">
                <img src="images/scrimbalogo.png" class="profile-pic">
                <textarea class="reply-area" placeholder="Post reply..." id="reply-input-${e.uuid}"></textarea>
            </div>
            <button id="reply-btn" data-post-reply="${e.uuid}">Reply</button>
		</div>
            
    </div>   
</div>
`}),t}function n(){document.getElementById("feed").innerHTML=m()}n();
