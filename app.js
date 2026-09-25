const places = {
  guangzhouAirport: { name: '广州白云国际机场 T2', city: '广州', kind: '出发机场', image: 'assets/saigon.jpg', description: '10 月 2 日 23:05 去程航班出发地。机场图片为通用参考，现场以航站楼指引为准。', tags: ['机场', 'T2'], query: 'Guangzhou Baiyun International Airport Terminal 2' },
  suvarnabhumi: { name: '曼谷素万那普国际机场 T1', city: '曼谷', kind: '抵达机场', image: 'assets/saigon.jpg', description: '10 月 3 日 00:45 抵达。入境后直接前往曼谷水门伯克利酒店休息。', tags: ['机场', '抵达'], query: 'Suvarnabhumi Airport Bangkok' },
  berkeley: { name: '曼谷水门伯克利酒店', city: '曼谷', kind: '曼谷酒店', image: 'assets/berkeley_hotel_order.png', description: '10 月 2 日至 10 月 6 日入住。酒店订单截图作为房型与订单辨认参考。', tags: ['酒店', '水门'], query: 'The Berkeley Hotel Pratunam Bangkok' },
  donMueang: { name: '廊曼国际机场 T1', city: '曼谷', kind: '转场机场', image: 'assets/saigon.jpg', description: '10 月 6 日 FD654 从这里出发，建议 09:00 左右离开酒店。', tags: ['机场', 'DMK T1'], query: 'Don Mueang International Airport Terminal 1' },
  tanSonNhat: { name: '新山一国际机场 T2', city: '胡志明', kind: '胡志明机场', image: 'assets/saigon.jpg', description: '10 月 6 日 15:20 抵达，10 月 8 日 07:10 返程也从这里出发。', tags: ['机场', 'T2'], query: 'Tan Son Nhat International Airport Terminal 2' },
  chipHomestay: { name: 'Chip Homestay & Studio', city: '胡志明', kind: '胡志明酒店', image: 'assets/chip_homestay_order.png', description: '981 Đường Lê Lai，10 月 6 日 14:00 入住。订单截图作为房间与地址辨认参考。', tags: ['酒店', '第一郡'], query: 'Chip Homestay & Studio 981 Duong Le Lai Ho Chi Minh City' },
  phra: { name: 'Phra Arthit', city: '曼谷', kind: '老城河岸', image: 'web_photos/wat_arun.jpg', description: '湄南河边的老城入口，适合早上慢逛和拍照。', tags: ['河岸', '早上'], query: 'Phra Arthit Bangkok' },
  eatSight: { name: 'Eat Sight Story Deck', city: '曼谷', kind: '河景餐厅', image: 'web_photos/wat_arun.jpg', description: '面向河景的午餐点，放在老城上午路线中，避免来回折返。', tags: ['午餐', '河景'], query: 'Eat Sight Story Deck Bangkok' },
  yaowarat: { name: '唐人街（耀华力路）', city: '曼谷', kind: '夜间街区', image: 'web_photos/yaowarat.jpg', description: '日落后再逛更舒服，适合把晚餐和夜间街拍放在一起。', tags: ['夜景', '街拍'], query: 'Yaowarat Road Bangkok' },
  bonchon: { name: 'Bonchon Tha Maharaj', city: '曼谷', kind: '晚餐备选', image: 'web_photos/yaowarat.jpg', description: '位于 Tha Maharaj 一带的晚餐备选，和老城河岸线相邻。', tags: ['餐厅', '备选'], query: 'Bonchon Tha Maharaj Bangkok' },
  local: { name: 'The Local', city: '曼谷', kind: '泰式餐厅', image: 'web_photos/here_hai.jpg', description: '适合在老城行程中作为泰式晚餐备选。', tags: ['泰餐', '备选'], query: 'The Local Bangkok restaurant' },
  chatuchak: { name: '扎度扎周末市场', city: '曼谷', kind: '周末市集', image: 'web_photos/an_dong.jpg', description: '10 月 4 日上午集中逛，体力和大件购物留出余量。', tags: ['购物', '周日'], query: 'Chatuchak Weekend Market Bangkok' },
  noodle: { name: 'Baan Kuay Tiew Ruathong', city: '曼谷', kind: '午餐', image: 'web_photos/pho_dish.jpg', description: '作为周末市场到暹罗之间的午餐备选。', tags: ['午餐', '面食'], query: 'Baan Kuay Tiew Ruathong Bangkok' },
  pangcha: { name: 'Pang Cha Cafe Siam Paragon', city: '曼谷', kind: '甜品', image: 'web_photos/cafe_apartment.jpg', description: '商场内休息和吃甜品，避开下午高温。', tags: ['甜品', '室内'], query: 'Pang Cha Cafe Siam Paragon Bangkok' },
  bigc: { name: 'Big C Supercenter Ratchadamri', city: '曼谷', kind: '超市采购', image: 'web_photos/saigon_square.jpg', description: '适合集中购买伴手礼、日用品和轻便服饰。', tags: ['采购', '暹罗'], query: 'Big C Supercenter Ratchadamri Bangkok' },
  chula: { name: '朱拉隆功夜市', city: '曼谷', kind: '夜市', image: 'web_photos/banthat.jpg', description: '已纳入主行程。和 Banthat Thong 餐饮带相邻，先逛再按客流择店。', tags: ['夜市', '重点加入'], query: 'Chula Night Market Bangkok' },
  somSom: { name: 'Som Som Seafood', city: '曼谷', kind: '必吃海鲜', image: 'web_photos/crab_fried_rice.jpg', description: '你指定一定要去的餐厅。地址为 659 Chulalongkorn 4 Alley, Wang Mai, Pathum Wan，和朱拉隆功夜市、Banthat Thong 同一片区。', tags: ['必吃', '海鲜', '朱拉隆功'], query: 'Som Som Seafood 659 Chulalongkorn 4 Alley Bangkok' },
  jeh: { name: 'Jeh O Chula', city: '曼谷', kind: '餐厅', image: 'web_photos/jeh_o.jpg', description: '朱拉隆功夜市附近的热门餐厅，建议现场看排队情况。', tags: ['晚餐', '排队'], query: 'Jeh O Chula Bangkok' },
  jimjoom: { name: 'Jimjoom99 Banthat Thong', city: '曼谷', kind: '餐厅', image: 'web_photos/banthat.jpg', description: 'Banthat Thong 一带的火锅/餐饮备选。', tags: ['晚餐', 'Banthat Thong'], query: 'Jimjoom99 Banthat Thong Bangkok' },
  chulakitchen: { name: '朱拉厨房', city: '曼谷', kind: '餐厅', image: 'web_photos/banthat.jpg', description: '夜市晚餐的另一个备选，不建议同晚连续打卡多家。', tags: ['晚餐', '备选'], query: 'Chula Kitchen Bangkok' },
  paknam: { name: 'Wat Paknam Phasi Charoen', city: '曼谷', kind: '寺庙', image: 'web_photos/paknam.jpg', description: '吞武里上午第一站，穿着端庄并预留步行时间。', tags: ['寺庙', '吞武里'], query: 'Wat Paknam Phasi Charoen Bangkok' },
  khlong: { name: 'Khlong Bang Luang Floating Market', city: '曼谷', kind: '水上市场', image: 'assets/talatnoi.jpg', description: '和 Wat Paknam 同侧，顺路安排社区与运河体验。', tags: ['运河', '社区'], query: 'Khlong Bang Luang Floating Market Bangkok' },
  baanKook: { name: 'Baan Kook Kai', city: '曼谷', kind: '午餐备选', image: 'web_photos/crab_fried_rice.jpg', description: '吞武里午餐备选，出发当天以营业状态为准。', tags: ['午餐', '备选'], query: 'Baan Kook Kai Bangkok' },
  iconsiam: { name: '暹罗天地 ICONSIAM', city: '曼谷', kind: '商场河畔', image: 'web_photos/iconsiam.jpg', description: '从吞武里过河后进入室内休息、补给和看河景。', tags: ['商场', '河畔'], query: 'ICONSIAM Bangkok' },
  asiatique: { name: '码头夜市 Asiatique', city: '曼谷', kind: '夜市', image: 'web_photos/yaowarat.jpg', description: '和 ICONSIAM 二选一即可，避免夜间长距离折返。', tags: ['夜市', '河畔'], query: 'Asiatique The Riverfront Bangkok' },
  phoQuynh: { name: 'Pho Quynh', city: '胡志明', kind: '越南餐厅', image: 'web_photos/pho_dish.jpg', description: '抵达胡志明第一晚的轻松晚餐备选。', tags: ['第一郡', '晚餐'], query: 'Pho Quynh Ho Chi Minh City' },
  fiveBoys: { name: 'Five Boys Number One Smoothies', city: '胡志明', kind: '饮品店', image: 'web_photos/cafe_apartment.jpg', description: '抵达当晚的饮品备选，按酒店附近位置取舍。', tags: ['饮品', '第一郡'], query: 'Five Boys Number One Smoothies Ho Chi Minh City' },
  post: { name: 'Saigon Central Post Office', city: '胡志明', kind: '城市地标', image: 'web_photos/post_office.jpg', description: '10 月 7 日早上的第一站，步行和拍照优先。', tags: ['地标', '早上'], query: 'Saigon Central Post Office' },
  notre: { name: '西贡圣母大教堂外部', city: '胡志明', kind: '教堂街区', image: 'web_photos/notre_dame.jpg', description: '和中央邮政局相邻，按现场开放区域参观外部。', tags: ['街区', '拍照'], query: 'Notre Dame Cathedral Basilica of Saigon' },
  phoHoa: { name: 'Phở Hòa Pasteur', city: '胡志明', kind: '越南餐厅', image: 'web_photos/pho_hoa.jpg', description: '第一郡午餐备选，避开午后高温。', tags: ['午餐', '河粉'], query: 'Pho Hoa Pasteur Ho Chi Minh City' },
  fineArts: { name: 'Ho Chi Minh City Fine Arts Museum', city: '胡志明', kind: '博物馆', image: 'web_photos/independence_palace.jpg', description: '室内文化点，放在午后市场和购物之前。', tags: ['室内', '文化'], query: 'Ho Chi Minh City Fine Arts Museum' },
  benthanh: { name: '滨城市场', city: '胡志明', kind: '市场', image: 'web_photos/ben_thanh.jpg', description: '注意现金、找零和随身物品，按时间短逛。', tags: ['市场', '小吃'], query: 'Ben Thanh Market Ho Chi Minh City' },
  maven: { name: 'The MAVEN Nguyễn Trãi', city: '胡志明', kind: '服装店', image: 'web_photos/saigon_square.jpg', description: 'Nguyễn Trãi 购物带的重点服饰店之一，先看营业状态。', tags: ['购物', '服装'], query: 'The MAVEN Nguyen Trai Ho Chi Minh City' },
  six: { name: '21Six Nguyen Trai', city: '胡志明', kind: '服装店', image: 'web_photos/saigon_square.jpg', description: '和 The MAVEN 放在同一购物时段，按风格和预算筛选。', tags: ['购物', '服装'], query: '21Six Nguyen Trai Ho Chi Minh City' },
  chats: { name: 'CHATS by C.DAM', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: 'Nguyễn Trãi 一带的女装备选，适合和附近店铺步行串联。', tags: ['购物', '女装'], query: 'CHATS by C.DAM Ho Chi Minh City' },
  aanh: { name: 'Aanh-Jiki', city: '胡志明', kind: '服装店', image: 'web_photos/saigon_square.jpg', description: '同一购物带的补充选项，不建议一次逛完所有店。', tags: ['购物', '服装'], query: 'Aanh Jiki Ho Chi Minh City' },
  mollynista: { name: 'MOLLYNISTA', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，按约 30 分钟一站安排。', tags: ['购物', '女装'], query: 'MOLLYNISTA Ho Chi Minh City' },
  cocosin: { name: 'COCOSIN STORE', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，和 Nguyễn Trãi 购物段一起筛选。', tags: ['购物', '女装'], query: 'COCOSIN STORE Ho Chi Minh City' },
  espoir: { name: 'L’ESPOIR', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，建议单店预留约 30 分钟。', tags: ['购物', '女装'], query: 'L ESPOIR clothing Ho Chi Minh City' },
  lavierge: { name: 'LA VIERGE', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，和附近店铺按顺路程度取舍。', tags: ['购物', '女装'], query: 'LA VIERGE clothing Ho Chi Minh City' },
  lsoul: { name: 'LSOUL', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，建议按风格和预算选择。', tags: ['购物', '女装'], query: 'LSOUL clothing Ho Chi Minh City' },
  jubin: { name: 'JUBIN Studio', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，单店约 30 分钟。', tags: ['购物', '女装'], query: 'JUBIN Studio Ho Chi Minh City' },
  huong: { name: 'HUONG Boutique', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的女装店，可作为备选，不必全部逛完。', tags: ['购物', '女装'], query: 'HUONG Boutique Ho Chi Minh City' },
  bliss: { name: 'Bliss Vintage', city: '胡志明', kind: '女装店', image: 'web_photos/saigon_square.jpg', description: '收藏中的复古女装店，适合在购物段最后按体力安排。', tags: ['购物', '复古'], query: 'Bliss Vintage Ho Chi Minh City' },
  workshop: { name: 'The Workshop Coffee', city: '胡志明', kind: '咖啡店', image: 'assets/coffee.jpg', description: '第一郡收尾咖啡备选，按购物结束位置选择。', tags: ['咖啡', '收尾'], query: 'The Workshop Coffee Ho Chi Minh City' },
  linh: { name: 'Cà phê Linh', city: '胡志明', kind: '咖啡店', image: 'assets/coffee.jpg', description: '第三郡咖啡休息点，和 Tân Định 动线相近。', tags: ['咖啡', '第三郡'], query: 'Ca phe Linh Ho Chi Minh City' },
  sweetcome: { name: 'SweetCome BKK', city: '曼谷', kind: '午餐备选', image: 'web_photos/crab_fried_rice.jpg', description: '吞武里午餐备选，出发当天以营业状态为准。', tags: ['午餐', '备选'], query: 'SweetCome BKK Bangkok' },
  tanDinh: { name: 'Nhà Thờ Giáo Xứ Tân Định', city: '胡志明', kind: '教堂', image: 'web_photos/notre_dame.jpg', description: '10 月 8 日原计划的第一站，但返程航班很早，实际应改为提前退房去机场。', tags: ['第三郡', '需调整'], query: 'Tan Dinh Church Ho Chi Minh City' },
  clothes: { name: 'MOLLYNISTA / COCOSIN / L’ESPOIR 等', city: '胡志明', kind: '服装购物带', image: 'web_photos/saigon_square.jpg', description: '10 月 8 日原购物计划因 07:10 航班取消；如改签返程，可恢复第三郡购物。', tags: ['购物', '原计划'], query: 'Nguyen Trai shopping street Ho Chi Minh City' },
};

const days = [
  { date: '10.02', title: '夜间抵达', city: '曼谷', stops: [
    ['23:05', '去程航班', '九元航空 AQ1267 · 广州白云 T2 → 曼谷素万那普 T1 00:45+1', null],
    ['00:45', '入住', '曼谷水门伯克利酒店', null],
  ]},
  { date: '10.03', title: '老城与河岸', city: '曼谷', stops: [
    ['09:30', '慢逛河岸', 'Phra Arthit', 'phra'],
    ['11:30', '河景午餐', 'Eat Sight Story Deck', 'eatSight'],
    ['16:30', '傍晚街拍', '唐人街（耀华力路）', 'yaowarat'],
    ['晚餐', '位置备选', 'Bonchon Tha Maharaj / The Local', 'bonchon,local'],
  ]},
  { date: '10.04', title: '周末市场与朱拉隆功夜市', city: '曼谷', stops: [
    ['09:30', '集中逛市集', '扎度扎周末市场', 'chatuchak'],
    ['13:00', '午餐', 'Baan Kuay Tiew Ruathong', 'noodle'],
    ['14:30', '商场与甜品', 'Pang Cha Cafe Siam Paragon', 'pangcha'],
    ['17:30', '采购', 'Big C Supercenter Ratchadamri', 'bigc'],
    ['19:30', '重点夜间路线', '朱拉隆功夜市', 'chula'],
    ['20:15', '必吃晚餐', 'Som Som Seafood', 'somSom'],
    ['21:30', '排队备选', 'Jeh O Chula / Jimjoom99 Banthat Thong / 朱拉厨房', 'jeh,jimjoom,chulakitchen'],
  ]},
  { date: '10.05', title: '吞武里与河畔夜景', city: '曼谷', stops: [
    ['09:30', '寺庙', 'Wat Paknam Phasi Charoen', 'paknam'],
    ['11:15', '运河社区', 'Khlong Bang Luang Floating Market', 'khlong'],
    ['午餐', '位置备选', 'Baan Kook Kai / SweetCome BKK', 'baanKook,sweetcome'],
    ['15:30', '河畔商场', '暹罗天地 ICONSIAM', 'iconsiam'],
    ['18:30', '夜市二选一', '码头夜市 Asiatique', 'asiatique'],
  ]},
  { date: '10.06', title: '曼谷 → 胡志明', city: '转场', stops: [
    ['09:00', '前往机场', '从曼谷水门伯克利酒店前往廊曼机场 T1', null],
    ['13:40', '城市转场', '泰国亚洲航空 FD654 · 廊曼 T1 → 新山一 T2 15:20', null],
    ['14:00', '入住时间', 'Chip Homestay & Studio · 981 Đường Lê Lai', null],
    ['18:30', '轻松晚餐', 'Pho Quynh / Five Boys Number One Smoothies', 'phoQuynh,fiveBoys'],
  ]},
  { date: '10.07', title: '第一郡老城与 Nguyễn Trãi 购物带', city: '胡志明', stops: [
    ['09:00', '城市地标', 'Saigon Central Post Office', 'post'],
    ['10:00', '街区散步', '西贡圣母大教堂外部', 'notre'],
    ['11:30', '午餐', 'Phở Hòa Pasteur', 'phoHoa'],
    ['13:30', '室内文化点', 'Ho Chi Minh City Fine Arts Museum', 'fineArts'],
    ['15:15', '市场与小吃', '滨城市场', 'benthanh'],
    ['17:00-21:00', '女装串联（每家约30分钟）', 'The MAVEN / 21Six / CHATS / Aanh-Jiki / MOLLYNISTA / COCOSIN / L’ESPOIR / LA VIERGE / LSOUL / JUBIN Studio / HUONG Boutique / Bliss Vintage', 'maven,six,chats,aanh,mollynista,cocosin,espoir,lavierge,lsoul,jubin,huong,bliss'],
    ['晚间', '咖啡收尾', 'The Workshop Coffee', 'workshop'],
  ]},
  { date: '10.08', title: '返程日', city: '胡志明', stops: [
    ['04:30', '提前退房', '联系 Chip Homestay 确认行李与退房方式', null],
    ['05:00', '前往机场', '从 981 Đường Lê Lai 前往新山一国际机场 T2', null],
    ['07:10', '返程航班', '国泰航空 CX786 · 胡志明 → 中国香港 10:55', null],
    ['原计划', '第三郡与购物', 'Tân Định Church / Cà phê Linh / 服装店', 'tanDinh,linh,clothes'],
  ]},
];

const routeList = document.querySelector('#route-list');
const detail = document.querySelector('#place-detail');
const tabs = [...document.querySelectorAll('.city-tab')];

function mapsEmbed(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&z=15`;
}

function renderRoute(city = 'all') {
  routeList.innerHTML = '';
  resetDetail();
  const filteredDays = days.filter(day => city === 'all' || day.city.includes(city) || day.stops.some(stop => (stop[3] || '').split(',').some(key => places[key]?.city.includes(city))));
  const firstPlaceDay = filteredDays.findIndex(day => day.stops.some(stop => stop[3]));
  filteredDays.forEach((day, dayIndex) => {
    const group = document.createElement('details');
    group.className = 'day-group';
    group.open = dayIndex === firstPlaceDay;
    group.dataset.city = day.city;
    group.innerHTML = `<summary class="day-header"><span class="day-date">${day.date}</span><span class="day-title">${day.title}</span><span class="day-city">${day.city}</span><span class="day-chevron" aria-hidden="true">⌄</span></summary><div class="stop-list"></div>`;
    const list = group.querySelector('.stop-list');
    day.stops.forEach(([time, kind, label, key]) => {
      const stop = document.createElement('div');
      stop.className = 'stop';
      const place = key ? places[key] : null;
      const placeKeys = key ? key.split(',') : [];
      const linkedPlaces = placeKeys.map(placeKey => places[placeKey]).filter(Boolean);
      stop.innerHTML = `<div class="stop-time">${time}</div><div class="stop-content"><div class="stop-kind">${kind}</div>${linkedPlaces.length ? linkedPlaces.map(place => `<button class="place-toggle" type="button" data-place="${Object.keys(places).find(placeKey => places[placeKey] === place)}" aria-expanded="false">${place.name}</button>`).join('') : `<strong class="plain-stop">${label}</strong>`}<p class="stop-note">${linkedPlaces.length > 1 ? '点击任一店名查看单独的地图和参考图。' : linkedPlaces[0]?.description || ''}</p></div>`;
      list.appendChild(stop);
    });
    routeList.appendChild(group);
  });
  routeList.querySelectorAll('.place-toggle').forEach(button => button.addEventListener('click', () => selectPlace(button.dataset.place, button)));
}

function resetDetail() {
  detail.innerHTML = `<div class="detail-empty"><div class="detail-pin">◎</div><strong>点击一个地点</strong><p>路线里的店名、景点和酒店都可以展开。这里会显示地图定位和参考图片。</p></div>`;
}

function selectPlace(key, button) {
  const place = places[key];
  routeList.querySelectorAll('.place-toggle').forEach(item => item.setAttribute('aria-expanded', 'false'));
  if (button) button.setAttribute('aria-expanded', 'true');
  detail.innerHTML = `<div class="detail-content"><img class="detail-media" src="${place.image}" alt="${place.name} 参考图" /><div class="detail-body"><p class="detail-kicker">${place.city} · ${place.kind}</p><h3>${place.name}</h3><p>${place.description}</p><div class="detail-meta">${place.tags.map(tag => `<span class="detail-chip">${tag}</span>`).join('')}</div></div><iframe class="map-frame" title="${place.name} 的 Google Maps 定位" loading="lazy" src="${mapsEmbed(place.query)}"></iframe><div class="map-caption">Google Maps 页内定位 · 参考图片用于辨认，营业状态和分店请以当天地图为准</div></div>`;
  detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function inlinePlaceMarkup(place) {
  return `<div class="inline-place-content"><img src="${place.image}" alt="${place.name} 参考图" /><div><p class="detail-kicker">${place.city} · ${place.kind}</p><h4>${place.name}</h4><p>${place.description}</p><div class="detail-meta">${place.tags.map(tag => `<span class="detail-chip">${tag}</span>`).join('')}</div></div></div><iframe class="inline-map" title="${place.name} 的 Google Maps 定位" loading="lazy" src="${mapsEmbed(place.query)}"></iframe>`;
}

function attachInlineLocations() {
  document.querySelectorAll('.inline-location').forEach(button => button.addEventListener('click', () => {
    const place = places[button.dataset.place];
    const card = button.closest('.order-card');
    const panel = card.querySelector('.inline-place');
    const shouldClose = !panel.hidden && panel.dataset.place === button.dataset.place;
    document.querySelectorAll('.inline-place').forEach(item => { item.hidden = true; item.innerHTML = ''; delete item.dataset.place; });
    if (!shouldClose) {
      panel.innerHTML = inlinePlaceMarkup(place);
      panel.dataset.place = button.dataset.place;
      panel.hidden = false;
    }
  }));
}

tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  renderRoute(tab.dataset.city);
}));

attachInlineLocations();
renderRoute();
