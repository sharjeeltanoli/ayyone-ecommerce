export type UserRole = "BUYER" | "SELLER" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  parentId?: string;
  children?: Category[];
}

export interface Brand {
  id: string;
  name: string;
  logo?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  images: string[];
  categoryId: string;
  brandId: string;
  specs: Record<string, string>;
  listings?: SellerListing[];
}

export interface SellerListing {
  id: string;
  productId: string;
  sellerId: string;
  price: number;
  stockQuantity: number;
  isActive: boolean;
  seller?: SellerProfile;
}

export interface SellerProfile {
  id: string;
  shopName: string;
  rating: number;
  totalSales: number;
  isVerified: boolean;
}

export interface CartItem {
  listingId: string;
  productId: string;
  productName: string;
  productImage: string;
  sellerName: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  buyerId: string;
  status: "PENDING" | "CONFIRMED" | "DROPPED_OFF" | "IN_TRANSIT" | "DELIVERED" | "CANCELLED" | "RETURNED";
  totalAmount: number;
  paymentMethod: "COD" | "JAZZCASH" | "EASYPAISA" | "CARD";
  createdAt: Date;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  orderId: string;
  listingId: string;
  quantity: number;
  price: number;
  dropOffDeadline?: Date;
}