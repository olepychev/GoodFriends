import { c as create_ssr_component, v as validate_component } from './handler-6e9bbb03.js';
import { P as Pagination, S as Swiper_1, a as Swiper_slide } from './pagination.min-06c02a8d.js';

/* empty css                        */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container"><nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="#">Casino</a></li>
      <li class="breadcrumb-item active" aria-current="page">Favourites</li></ol></nav>
  <div class="text-center m-100 favorite"><img class="widhimg d-none-light" src="/img/Illustration_Favoritefavorite.svg">
    <img class="widhimg d-none-dark" style="margin: 0 auto; display:none;" src="/img/favorite-light.png">
    <h1 class="mt-4">No Favourites Yet</h1>
    <p>Click the “<img src="/img/icon_favorite.svg">” by your favourite league
      or team and game to add.
    </p>
    <button class="btn mt-3"><span>Go to Home</span></button></div></div>

<div class="container"><div class="favourites"><div class="desknone"><div class="row"><div class="col-2 pe-0"><button type="button" class="btn btn-search w-100"><img src="/img/Group-48.svg"></button></div>
        <div class="col-10 ps-0"><div class="form-outline"><input type="search" id="form1" class="form-control w-100" placeholder="Search"></div></div></div></div>

    <div class="boxsecond boxforth"><div class="row"><div class="col-md-12 categories-swiper-top swiper-top"><h2 class="title">Casino/Slot</h2>

          <div class="swiper-navigation"><button class="swiper-prev-btn categories-prev"><svg style="transform:rotate(180deg)" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="url(#paint0_linear_615_16097)"></path><defs><linearGradient id="paint0_linear_615_16097" x1="1.66667" y1="-2.3" x2="8.01308" y2="-1.50789" gradientUnits="userSpaceOnUse"><stop stop-color="#C6A3FF"></stop><stop offset="1" stop-color="#7E8BED"></stop></linearGradient></defs></svg></button>
            <button class="swiper-next-btn categories-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="url(#paint0_linear_615_16097)"></path><defs><linearGradient id="paint0_linear_615_16097" x1="1.66667" y1="-2.3" x2="8.01308" y2="-1.50789" gradientUnits="userSpaceOnUse"><stop stop-color="#C6A3FF"></stop><stop offset="1" stop-color="#7E8BED"></stop></linearGradient></defs></svg></button></div></div></div>
      <div class="oc1">${validate_component(Swiper_1, "Swiper").$$render(
    $$result,
    {
      spaceBetween: 15,
      slidesPerView: 2,
      modules: [Pagination],
      breakpoints: {
        0: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 4 },
        1400: { slidesPerView: 6 }
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item"><div class="box"><img class="mainimg" src="/img/Rectangle-38.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item text-white"><div class="box"><img class="mainimg" src="/img/Rectangle-39.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item text-white"><div class="box"><img class="mainimg" src="/img/Rectangle-40.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item text-white"><div class="box"><img class="mainimg" src="/img/Rectangle-41.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item text-white"><div class="box"><img class="mainimg" src="/img/Rectangle-42.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item"><div class="box"><img class="mainimg" src="/img/Rectangle-38.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}`;
      }
    }
  )}</div></div>

    <div class="boxsecond boxforth navnone"><div class="row"><div class="col-md-12 categories-swiper-top swiper-top"><h2 class="title">Team/League</h2>

          <div class="swiper-navigation"><button class="swiper-prev-btn categories_tl-prev"><svg style="transform:rotate(180deg)" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="url(#paint0_linear_615_16097)"></path><defs><linearGradient id="paint0_linear_615_16097" x1="1.66667" y1="-2.3" x2="8.01308" y2="-1.50789" gradientUnits="userSpaceOnUse"><stop stop-color="#C6A3FF"></stop><stop offset="1" stop-color="#7E8BED"></stop></linearGradient></defs></svg></button>
            <button class="swiper-next-btn categories_tl-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="url(#paint0_linear_615_16097)"></path><defs><linearGradient id="paint0_linear_615_16097" x1="1.66667" y1="-2.3" x2="8.01308" y2="-1.50789" gradientUnits="userSpaceOnUse"><stop stop-color="#C6A3FF"></stop><stop offset="1" stop-color="#7E8BED"></stop></linearGradient></defs></svg></button></div></div></div>

      <div class="threecolumn mt-3">${validate_component(Swiper_1, "Swiper").$$render(
    $$result,
    {
      spaceBetween: 15,
      slidesPerView: 3,
      modules: [Pagination],
      breakpoints: {
        0: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        1400: { slidesPerView: 3 }
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item"><ul><li><img class="me-3 img" src="/img/Group-37006.svg"></li>
                <li><p class="mb-0">K-League</p>
                  <p class="mb-0"><span>Sports</span></p></li>
                <li class="float-end mt-4"><img src="/img/Frame-64.svg"></li></ul></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item"><ul><li><img class="me-3 img" src="/img/Group-37007.svg"></li>
                <li><p class="mb-0">CBLOL</p>
                  <p class="mb-0"><span>E-Sports</span></p></li>
                <li class="float-end mt-4"><img src="/img/Frame-64.svg"></li></ul></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item"><ul><li><img class="me-3 img" src="/img/Group-37006.svg"></li>
                <li><p class="mb-0">K-League</p>
                  <p class="mb-0"><span>Sports</span></p></li>
                <li class="float-end mt-4"><img src="/img/Frame-64.svg"></li></ul></div>`;
          }
        })}`;
      }
    }
  )}</div></div>
    <div class="boxsecond boxforth"><div class="row"><div class="col-md-12 categories-swiper-top swiper-top"><h2 class="title">Minigames</h2>
          <div class="swiper-navigation"><button class="swiper-prev-btn categories_oc2-prev"><svg style="transform:rotate(180deg)" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="url(#paint0_linear_615_16097)"></path><defs><linearGradient id="paint0_linear_615_16097" x1="1.66667" y1="-2.3" x2="8.01308" y2="-1.50789" gradientUnits="userSpaceOnUse"><stop stop-color="#C6A3FF"></stop><stop offset="1" stop-color="#7E8BED"></stop></linearGradient></defs></svg></button>
            <button class="swiper-next-btn categories_oc2-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="url(#paint0_linear_615_16097)"></path><defs><linearGradient id="paint0_linear_615_16097" x1="1.66667" y1="-2.3" x2="8.01308" y2="-1.50789" gradientUnits="userSpaceOnUse"><stop stop-color="#C6A3FF"></stop><stop offset="1" stop-color="#7E8BED"></stop></linearGradient></defs></svg></button></div></div></div>
      <div class="oc2">${validate_component(Swiper_1, "Swiper").$$render(
    $$result,
    {
      spaceBetween: 15,
      slidesPerView: 2,
      modules: [Pagination],
      breakpoints: {
        0: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 4 },
        1400: { slidesPerView: 6 }
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item"><div class="box"><img class="mainimg" src="/img/Rectangle-38.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item text-white"><div class="box"><img class="mainimg" src="/img/Rectangle-39.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item text-white"><div class="box"><img class="mainimg" src="/img/Rectangle-40.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item text-white"><div class="box"><img class="mainimg" src="/img/Rectangle-41.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item text-white"><div class="box"><img class="mainimg" src="/img/Rectangle-42.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}

          ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item"><div class="box"><img class="mainimg" src="/img/Rectangle-38.svg">
                <div class="hover"><a href="#"><img src="/img/hover.svg"></a></div>
                <div class="content"><p><a href="#">Evo Play</a>
                    <span class="float-end"><img src="/img/Frame-64.svg"></span></p></div></div></div>`;
          }
        })}`;
      }
    }
  )}</div></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-372c424c.js.map
