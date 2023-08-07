const routes = [
  {
    path: '/',
    component: () => import('pages/main/Intro-main.vue')
  },
  {
    path: '/auth/loginWorker',
    component: () => import('pages/auth/LoginWorker.vue'),
    meta: { title: '로그인', subTitle: '근무자 로그인', rmk: '핀번호를 입력해 주세요' },
    root: true
  },
  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'roomType',
        component: () => import('pages/settings/RoomType.vue'),
        meta: { title: '관리', subTitle: '객실타입 관리', rmk: '객실타입별로 기본 정보를 등록하여 사용할 수 있습니다.' },
        root: true
      },
      {
        path: 'room',
        component: () => import('pages/settings/Room.vue'),
        meta: { title: '관리', subTitle: '객실관리', rmk: '객실타입별로 층, 객실호수를 등록하여 사용할 수 있으며, 최초등록시 전부 활성화로 표시됩니다. <br/>비활성화시 달력예약 및 현황표에서 표시되지 않습니다' },
        root: true
      },
      {
        path: 'roomHistory',
        component: () => import('pages/settings/RoomHistory.vue'),
        meta: { title: '관리', subTitle: '객실설정 변경 이력', rmk: '객실 관리 항목에 대한 변경 이력을 조회할 수 있습니다.' },
        root: true
      },
      {
        path: 'cust',
        component: () => import('pages/settings/Cust.vue'),
        meta: { title: '관리', subTitle: '거래처 관리', rmk: '채널 및 거래처를 관리하기 위해 기초 정보를 등록하여 사용할 수 있습니다.' },
        root: true
      },
      {
        path: 'custHistory',
        component: () => import('pages/settings/CustHistory.vue'),
        meta: { title: '관리', subTitle: '거래처관리 변경 이력', rmk: '거래처 관리 항목에 대한 변경 이력을 조회할 수 있습니다.' },
        root: true
      },
      {
        path: 'device',
        component: () => import('pages/settings/Device.vue'),
        meta: { title: '관리', subTitle: '결제단말기', rmk: '결제단말기를 등록하고 관리합니다.' },
        root: true
      },
      {
        path: 'deviceHistory',
        component: () => import('pages/settings/DeviceHistory.vue'),
        meta: { title: '관리', subTitle: '결제단말기 변경 이력', rmk: '결제단말기 관리 항목에 대한 변경 이력을 조회할 수 있습니다.' },
        root: true
      },
      {
        path: 'service',
        component: () => import('pages/settings/Service.vue'),
        meta: { title: '관리', subTitle: '서비스 관리', rmk: '숙소의 서비스를 관리하기 위해 기초 정보를 등록하여 사용할 수 있습니다.' },
        root: true
      },
      {
        path: 'serviceHistory',
        component: () => import('pages/settings/ServiceHistory.vue'),
        meta: { title: '관리', subTitle: '서비스 관리 변경이력', rmk: '숙소의 서비스를 관리 수정 이력을 확인 할 수 있습니다.' },
        root: true
      },
      {
        path: 'worker',
        component: () => import('pages/settings/Worker.vue'),
        meta: { title: '관리', subTitle: '근무자 관리', rmk: '개별 관리자 설정을 통해 메뉴의 접근 권한을 설정할 수 있습니다' },
        root: true
      },
      {
        path: 'season',
        component: () => import('pages/settings/Season.vue'),
        meta: { title: '관리', subTitle: '성수기 관리', rmk: '성수기/비성수기 관리를 통해 요금을 편하게 관리할 수 있습니다' },
        root: true
      },
      {
        path: 'accommodation',
        component: () => import('pages/settings/Accommodation.vue'),
        meta: { title: '관리', subTitle: '숙소 기본 정보', rmk: '숙소의 서비스 상태와 원픽 고객에게 제공되는 정보입니다.' },
        root: true
      }
    ]
  },

  {
    path: '/mng',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'userAuth',
        component: () => import('pages/mng/UserAuth.vue'),
        meta: { title: '관리', subTitle: '휴대폰/비밀번호설정', rmk: '휴대폰과 비밀번호를 변경하실 수 있습니다.' },
        root: true
      },
      {
        path: 'userExpire',
        component: () => import('pages/mng/UserExpire.vue'),
        meta: { title: '관리', subTitle: '회원탈퇴  ', rmk: '회원탈퇴 요청시 승인처리를 통해 모든 자료가 삭제됩니다.' },
        root: true
      }
    ]
  },

  {
    path: '/page',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'support',
        component: () => import('pages/page/Support.vue'),
        meta: { title: '관리', subTitle: '지원', rmk: '프로그램 지원 정보 입니다' }
      }
    ]
  },

  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/main/Main.vue'),
        meta: { title: '메인페이지', subTitle: 'HOME', rmk: '' },
        name: 'main'
      },
      {
        path: '/main/main01',
        component: () => import('pages/main/Main01.vue'),
        meta: { title: '', subTitle: 'TodayRes,CheckIn', rmk: 'Main01.vue' }
      },
      {
        path: '/main/main02',
        component: () => import('pages/main/Main02.vue'),
        meta: { title: '', subTitle: '채널예약, 채널판매마감', rmk: 'Main02.vue' }
      },
      {
        path: '/main/main03',
        component: () => import('pages/main/Main03.vue'),
        meta: { title: '', subTitle: '채널재고현황', rmk: 'Main03.vue' }
      },
      {
        path: '/main/main04',
        component: () => import('pages/main/Main04.vue'),
        meta: { title: '', subTitle: '숙소통계', rmk: 'Main04.vue' }
      },
      {
        path: '/main/main05',
        component: () => import('pages/main/Main05.vue'),
        meta: { title: '', subTitle: '채널통계', rmk: 'Main05.vue' }
      },
      {
        path: '/main/main06',
        component: () => import('pages/main/Main06.vue'),
        meta: { title: '', subTitle: '메인우측', rmk: 'Main06.vue' }
      },
      {
        path: 'notice',
        component: () => import('pages/main/Notice.vue'),
        meta: { title: '공지사항', subTitle: '공지사항', rmk: '공지사항을 확인 하실 수 있습니다.' }
      },
      {
        path: 'noticeDetail',
        component: () => import('pages/main/NoticeDetail.vue'),
        meta: { title: '공지사항', subTitle: '공지사항', rmk: '공지사항의 상세 정보를 볼 수 있습니다.' }
      },
      {
        path: 'news',
        component: () => import('pages/main/News.vue'),
        meta: { title: '숙박뉴스', subTitle: '숙박뉴스', rmk: '숙박뉴스의 컨텐츠를 열람 하실 수 있습니다.' }
      },
      {
        path: 'newsDetail',
        component: () => import('pages/main/NewsDetail.vue'),
        meta: { title: '숙박뉴스', subTitle: '숙박뉴스', rmk: '숙박뉴스의 컨텐츠를 열람 하실 수 있습니다.' }
      }
    ]
  },

  {
    path: '/sellmng',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'calendar',
        component: () => import('pages/sellmng/Calendar.vue'),
        meta: { title: '판매관리', subTitle: '판매 캘린더 ', rmk: '채널과 현장을 통해 판매할 가격 시간, 재고를 날짜별로 관리해 보세요.' },
        root: true
      },
      {
        path: 'sellSettingHistory',
        component: () => import('pages/sellmng/SellSettingHistory.vue'),
        meta: { title: '판매관리', subTitle: '판매설정 변경 이력', rmk: '특정 판매 날짜에 대한 가격/시간/재고 변경 이력을 조회할 수 있습니다.<br/>판매날짜를 기준으로 90일 전/후의 이력을 제공합니다.' },
        root: true
      },
      {
        path: 'sellPrice',
        component: () => import('pages/sellmng/SellPrice.vue'),
        meta: { title: '판매관리', subTitle: '요금등록', rmk: '판매할 가격, 시간을 요일별로 관리해 보세요. 요금표는 기본 판매정보가 되어 캘린더에 반영됩니다.' },
        root: true
      },
      {
        path: 'sellPriceMulti',
        component: () => import('pages/sellmng/SellPriceMulti.vue'),
        meta: { title: '판매관리', subTitle: '요금표', rmk: '판매할 가격, 시간을 요일별로 관리해 보세요. 요금표는 기본 판매정보가 되어 캘린더에 반영됩니다.' },
        root: true
      },
      {
        path: 'sellPriceCalendar',
        component: () => import('pages/sellmng/SellPriceCalendar.vue'),
        meta: { title: '판매관리', subTitle: '판매캘린더', rmk: '객실 타입별로 책정된 요금 정보를 확인, 수정합니다.' },
        root: true
      },
      {
        path: 'resumeIncome',
        component: () => import('pages/sellmng/ResumeIncome.vue'),
        meta: { title: '판매관리', subTitle: '입금관리', rmk: '채널에서 입금된 입금내역을 등록/관리 합니다.' },
        root: true
      }
    ]
  },
  {
    path: '/sellmng',
    component: () => import('layouts/PopupLayout.vue'),
    children: [
      {
        path: 'resumeIncomeDetail',
        component: () => import('pages/sellmng/ResumeIncomeDetail.vue'),
        meta: { title: '판매관리', subTitle: '입금상세내역', rmk: '채널에서 입금된 상세한 입금내역 입니다.' },
        root: true
      },
      {
        path: 'ResumeDetail',
        component: () => import('pages/smry/ResumeDetail.vue'),
        meta: { title: '판매관리', subTitle: '입금상세내역', rmk: '채널에서 입금된 상세한 입금내역 입니다.' },
        root: true
      }
    ]
  },

  {
    path: '/reserv',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'reservChannel',
        component: () => import('pages/reserv/ReservChannel.vue'),
        meta: { title: '채널예약', subTitle: '채널예약내역', rmk: '채널이나 숙소현장을 통해 예약한 고객의 예약 정보를 입실 일자별로 조회할 수 있습니다' },
        root: true
      },
      {
        path: 'setRoom',
        component: () => import('pages/reserv/SetRoom.vue'),
        meta: { title: '채널예약', subTitle: '객실 배정하기', rmk: '채널을 통해 예약한 고객의 예약 정보를 확인하여 객실을 바로 배정할 수 있습니다. <br/>+ 예약 추가하기를 선택하면 수기입력으로 채널 예약 내역을 등록할 수 있습니다.' },
        root: true
      },
      {
        path: 'search',
        component: () => import('pages/reserv/Search.vue'),
        meta: { title: '원픽예약', subTitle: '원픽예약내역 ', rmk: '예약한 고객의 예약 정보를 통합 검색 조건별로 조회할 수 있습니다.' },
        root: true
      },
      {
        path: 'search_ota',
        component: () => import('pages/reserv/Search_ota.vue'),
        meta: { title: 'OTA예약', subTitle: 'OTA예약내역 ', rmk: '예약한 고객의 예약 정보를 통합 검색 조건별로 조회할 수 있습니다.' },
        root: true
      },
      {
        path: 'reservPay',
        component: () => import('pages/reserv/ReservPay.vue'),
        meta: { title: '결제목록', subTitle: '현장결제내역 ', rmk: '현장에서 결제한 내역을 조회/취소 할 수 있습니다' },
        root: true
      }
    ]
  },
  {
    path: '/reserv',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'reservQuick',
        component: () => import('pages/reserv/ReservQuick2.vue'),
        meta: { title: '빠른숙박예약', subTitle: '빠른숙박예약', rmk: '' },
        root: true
      },
      {
        path: 'reservQuick2',
        component: () => import('pages/reserv/ReservQuick2.vue'),
        meta: { title: '빠른숙박예약', subTitle: '빠른숙박예약', rmk: '' },
        root: true
      }
    ]
  },

  {
    path: '/room',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'rooms',
        component: () => import('pages/rooms/Rooms.vue'),
        meta: { title: '당일예약', subTitle: '당일예약', rmk: '' },
        root: true
      }
    ]
  },

  {
    path: '/statics',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'reserv',
        component: () => import('pages/statics/Reserv.vue'),
        meta: { title: '예약통계', subTitle: '예약통계', rmk: '예약 정보를 기반으로한 통계를 볼 수 있습니다.' },
        root: true
      }
    ]
  },

  {
    path: '/smry',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'resume',
        component: () => import('pages/smry/Resume.vue'),
        meta: { title: '정산내역', subTitle: '정산내역', rmk: '' },
        root: true
      },
      {
        path: 'resume_srmy',
        component: () => import('pages/smry/Resume_smry.vue'),
        meta: { title: '정산내역', subTitle: '정산내역', rmk: '' },
        root: true
      },
      {
        path: 'tax',
        component: () => import('pages/smry/Tax.vue'),
        meta: { title: '부가세신고자료', subTitle: '부가세신고자료', rmk: '' },
        root: true
      },
      {
        path: 'taxreg',
        component: () => import('pages/smry/Taxreg.vue'),
        meta: { title: '월/채널별 매출등록', subTitle: '월/채널별 매출 등록', rmk: '채널별 월 매출액을 관리하기 위해 월별 매출액을 등록, 수정하여 사용할 수 있습니다. 현장매출과 원픽채널 매출정보는 수정이 불가능합니다' },
        root: true
      }
    ]
  },

  {
    path: '/smry',
    component: () => import('layouts/PrintLayout.vue'),
    children: [
      {
        path: 'taxPrint',
        component: () => import('pages/smry/TaxPrint.vue'),
        meta: { title: '부가세신고자료', subTitle: '부가세신고자료', rmk: '부가세 신고에 필요한 자료를 다운로드 받으세요. 매월 3일에 전월분 자료의 취합이 완료됩니다' },
        root: true
      }
    ]
  },

  {
    path: '/review',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'review',
        component: () => import('pages/review/Review.vue'),
        meta: { title: '고객후기관리', subTitle: '고객후기관리', rmk: '원픽 예약 고객의 후기를 확인하고, 답변을 통해 소통해보시기 바랍니다.' },
        root: true
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
