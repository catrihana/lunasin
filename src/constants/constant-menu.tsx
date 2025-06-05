import {
  AccountBankIcon,
  ChatIcon,
  CreateTenderIcon,
  DashboardIcon,
  DraftTenderIcon,
  InvoiceFinancingIcon,
  ListEsignAndEmeteraiIcon,
  ListsConstructionSellersIcon,
  ListsPrTerminIcon,
  ListsReorderIcon,
  ListsTenderIcon,
  ListsTerminIcon,
  ListsTransactionIcon,
  ListsUsersIcon,
  PaymentIcon,
  PoFinancingIcon,
  PriceTransactionIcon,
  ProfileIcon,
  RefundBalanceIcon,
  RequestApprovePaymentIcon,
  RequestPaymentIcon,
  ReviewIcon,
  ShippingAddresssIcon,
} from 'components/IconsSideMenu';
import { ReactElement } from 'react';

type MenuItem = {
  label: string;
  name: string;
  className?: string | null;
  path: string;
  notification?: number | null;
  icon?: ReactElement;
  roleAccess?: string[];
  rfqProtect?: string[];
};

type MenuGroup = {
  name: string;
  path?: string;
  icon?: ReactElement;
  roleAccess?: string[];
  rfqProtect?: string[];
  menu: MenuItem[];
};

type DashboardMenu = MenuGroup[];

const LANDING_FINANCE_MENU = [
  {
    to: '#keuntungan',
    title: 'Keuntungan',
  },
  {
    to: '#jenispinjaman',
    title: 'Jenis Pinjaman',
  },
  {
    to: '#penyediapinjaman',
    title: 'Penyedia Pinjaman',
  },
  {
    to: '#katamereka',
    title: 'Kata Mereka',
  },
  {
    to: '#carapengajuan',
    title: 'Cara Pengajuan',
  },
  {
    to: '#tanyajawab',
    title: 'Tanya & Jawab',
  },
];

const DASHBOARD_MENU: DashboardMenu = [
  {
    name: '',
    menu: [
      {
        label: 'Dashboard',
        name: 'transaction-dashboard',
        path: '/dashboard/transaction-dashboard',
        notification: null,
        icon: <DashboardIcon path="/dashboard/transaction-dashboard" />,
        roleAccess: [
          'buyer-staff',
          'buyer-manager',
          'buyer-dapur-manager',
          'buyer-dapur-staff',
          'buyer-finance',
        ],
        rfqProtect: ['buyer-staff', 'buyer-manager'],
      },
    ],
    roleAccess: ['buyer-staff', 'buyer-manager'],
    rfqProtect: ['buyer-staff', 'buyer-manager'],
  },
  {
    name: 'Pengaturan',
    menu: [
      {
        label: 'Profil',
        name: 'profile',
        path: '/dashboard/profile',
        notification: null,
        icon: <ProfileIcon path="/dashboard/profile" />,
        roleAccess: [
          'buyer-retail',
          'buyer-staff',
          'buyer-manager',
          'klpd',
          'admin-bumn',
          'buyer-dapur-manager',
          'buyer-dapur-staff',
          'buyer-finance',
        ],
      },
      {
        label: 'Pengguna',
        name: 'staff',
        path: '/dashboard/user',
        notification: null,
        icon: <ListsUsersIcon path="/dashboard/user" />,
        roleAccess: ['buyer-manager', 'buyer-dapur-manager'],
        rfqProtect: ['buyer-staff'],
      },
      {
        label: 'Alamat Pengiriman',
        name: 'address',
        path: '/dashboard/address',
        notification: null,
        icon: <ShippingAddresssIcon path="/dashboard/address" />,
        roleAccess: [
          'buyer-retail',
          'buyer-staff',
          'klpd',
          'buyer-dapur-staff',
          'buyer-finance',
        ],
        rfqProtect: ['buyer-manager'],
      },
      {
        label: 'Nomor Rekening',
        name: 'account-number',
        path: '/dashboard/account-number',
        notification: null,
        icon: <AccountBankIcon path="/dashboard/account-number" />,
        roleAccess: [
          'buyer-retail',
          'buyer-staff',
          'buyer-manager',
          'klpd',
          'buyer-dapur-manager',
          'buyer-dapur-staff',
          'buyer-finance',
        ],
      },
    ],
  },
  // Access Menu Admin Perusahaan
  {
    name: 'Data Perusahaan',
    menu: [
      {
        label: 'Daftar Buyer Group',
        name: 'lists-users',
        path: '/dashboard/company-data/buyer-groups',
        notification: null,
        icon: <ListsUsersIcon path="/dashboard/company-data/buyer-groups" />,
        roleAccess: ['admin-bumn'],
      },
      {
        label: 'Daftar Penjual Binaan',
        name: 'construction-sellers',
        path: '/dashboard/company-data/construction-sellers',
        notification: null,
        icon: (
          <ListsConstructionSellersIcon path="/dashboard/company-data/construction-sellers" />
        ),
        roleAccess: ['admin-bumn'],
      },
    ],
  },
  {
    name: 'Transaksi',
    menu: [
      {
        label: 'Pembayaran',
        name: 'payment',
        path: '/transaction/payment',
        notification: null,
        icon: <PaymentIcon path="/transaction/payment" />,
        roleAccess: ['buyer-retail'],
        rfqProtect: ['buyer-staff', 'buyer-manager', 'klpd'],
      },
      {
        label: 'Daftar Transaksi',
        name: 'transaction-list',
        path: '/transaction',
        notification: null,
        icon: <ListsTransactionIcon path="/transaction" />,
        roleAccess: [
          'buyer-retail',
          'buyer-staff',
          'buyer-manager',
          'klpd',
          'admin-bumn',
          'buyer-dapur-manager',
          'buyer-dapur-staff',
          'buyer-finance',
        ],
      },
      {
        label: 'Permintaan Pembelian',
        name: 'purchase-request',
        path: '/transaction/purchase-request',
        notification: null,
        icon: <RequestPaymentIcon path="/transaction/purchase-request" />,
        roleAccess: [
          'buyer-staff',
          'buyer-manager',
          'admin-bumn',
          'buyer-dapur-manager',
          'buyer-finance',
        ],
      },
      {
        label: 'Daftar Transaksi Termin',
        name: 'term-transaction',
        path: '/transaction/term-transaction',
        icon: <ListsTerminIcon path="/transaction/term-transaction" />,
        roleAccess: [
          'buyer-staff',
          'buyer-manager',
          'admin-bumn',
          'buyer-finance',
        ],
      },
      {
        label: 'Permintaan Pembelian Termin',
        name: 'term-purchase-request',
        path: '/transaction/term-purchase-request',
        icon: <ListsPrTerminIcon path="/transaction/term-purchase-request" />,
        roleAccess: [
          'buyer-staff',
          'buyer-manager',
          'admin-bumn',
          'buyer-finance',
        ],
      },
      {
        label: 'Permintaan Persetujuan Pinjaman',
        name: 'loan-approval-request',
        path: '/transaction/loan-approval-request',
        icon: (
          <RequestApprovePaymentIcon path="/transaction/loan-approval-request" />
        ),
        roleAccess: ['buyer-manager', 'buyer-dapur-manager'],
      },
      {
        label: 'Biaya Transaksi & Kurir',
        name: 'courier-transaction-fee',
        path: '/transaction/courier-transaction-fee',
        icon: (
          <PriceTransactionIcon path="/transaction/courier-transaction-fee" />
        ),
        roleAccess: [
          'buyer-staff',
          'buyer-manager',
          'buyer-dapur-manager',
          'buyer-dapur-staff',
          'buyer-finance',
        ],
      },
      {
        label: 'E-Sign and E-Meterai',
        name: 'esign-and-emeterai',
        path: '/transaction/esign-and-emeterai',
        icon: (
          <ListEsignAndEmeteraiIcon path="/transaction/esign-and-emeterai" />
        ),
        roleAccess: [
          'buyer-retail',
          'buyer-staff',
          'buyer-manager',
          'buyer-finance',
          'buyer-dapur-staff',
          'klpd',
        ],
      },
      {
        label: 'PO Financing', //hide menu po financing & invoice financing
        name: 'po-financing',
        path: '/po-financing',
        icon: <PoFinancingIcon path="/po-financing" />,
        notification: null,
        roleAccess: [],
      },
      {
        label: 'Invoice Financing',
        name: 'invoice-financing',
        path: '/invoice-financing',
        icon: <InvoiceFinancingIcon path="/invoice-financing" />,
        notification: null,
        roleAccess: [],
      },
      {
        label: 'Saldo Refund',
        name: 'refund-balance',
        path: '/refund-balance',
        icon: <RefundBalanceIcon path="/refund-balance" />,
        notification: null,
        roleAccess: [],
      },
      {
        label: 'Beli Lagi',
        name: 'reorder-list',
        className: 'reorder-walkthrough',
        path: '/transaction/reorder',
        notification: null,
        icon: <ListsReorderIcon path="/transaction/reorder" />,
        roleAccess: [
          'buyer-retail',
          'buyer-staff',
          'klpd',
          'buyer-dapur-staff',
          'buyer-finance',
        ],
      },
      {
        label: 'Ulasan',
        name: 'review',
        path: '/transaction/review',
        notification: null,
        icon: <ReviewIcon path="/transaction/review" />,
        roleAccess: [
          'buyer-retail',
          'buyer-staff',
          'klpd',
          'buyer-dapur-staff',
          'buyer-finance',
        ],
        rfqProtect: ['buyer-manager'],
      },
    ],
  },
  {
    name: 'Termin',
    menu: [],
  },
  {
    name: 'Chat',
    menu: [
      {
        label: 'Kotak Pesan',
        name: 'chat',
        path: '/chat',
        notification: null,
        icon: <ChatIcon path="/chat" />,
        roleAccess: [
          'buyer-retail',
          'buyer-staff',
          'klpd',
          'buyer-dapur-staff',
          'buyer-finance',
        ],
      },
    ],
  },
  {
    name: 'Tender Kilat',
    menu: [
      {
        label: 'Buat Tender Kilat',
        name: 'create-request-for-quotation',
        path: '/buat-tender-kilat',
        notification: null,
        icon: <CreateTenderIcon path="/buat-tender-kilat" />,
        roleAccess: ['buyer-staff', 'klpd', 'buyer-finance'],
        rfqProtect: ['buyer-staff', 'buyer-manager'],
      },
      {
        label: 'Daftar Tender Kilat',
        name: 'list-request-for-quotation',
        path: '/daftar-tender-kilat',
        notification: null,
        icon: <ListsTenderIcon path="/daftar-tender-kilat" />,
        roleAccess: ['buyer-staff', 'klpd', 'buyer-finance'],
        rfqProtect: ['buyer-staff', 'buyer-manager'],
      },
      {
        label: 'Draft Tender Kilat',
        name: 'draft-request-for-quotation',
        path: '/draft-tender-kilat',
        notification: null,
        icon: <DraftTenderIcon path="/draft-tender-kilat" />,
        roleAccess: ['buyer-staff', 'klpd', 'buyer-finance'],
        rfqProtect: ['buyer-staff', 'buyer-manager'],
      },
    ],
  },
  // {
  //   name: "Informasi",
  //   menu: [
  //     { label: "Anggaran", name: "budget", path: "", notification: null },
  //     {
  //       label: "Rencana Belanja",
  //       name: "shopping-plan",
  //       path: "",
  //       notification: null,
  //     },
  //     {
  //       label: "Produk Favorit",
  //       name: "favorite-product",
  //       path: "",
  //       notification: null,
  //     },
  //   ],
  // },
];

const SELLER_PREMIUM_MENU = [
  {
    id: 1,
    url: '',
    name: 'Beranda',
  },
  {
    id: 2,
    url: '',
    name: 'PaDi UMKM Marketplace',
    subMenu: [
      {
        id: 1,
        url: '/',
        name: 'Masuk Sebagai Pembeli',
      },
      {
        id: 2,
        url: process.env.NEXT_PUBLIC_SELLER_DOMAIN,
        name: 'Masuk Sebagai Penjual',
      },
    ],
  },
  {
    id: 3,
    url: 'https://info.padiumkm.id/help',
    name: 'Bantuan PaDi UMKM',
  },
  {
    id: 4,
    url: 'https://info.padiumkm.id',
    name: 'Info PaDi UMKM',
  },
];

export { LANDING_FINANCE_MENU, DASHBOARD_MENU, SELLER_PREMIUM_MENU };
