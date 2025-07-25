/**
 * *GET /space*
 * Retrieve detailed information about your space.
 */

export interface SpaceResponse {
	data: Space;
}

export interface Space {
	id: number; // Unique space identifier
	user_id: number; // Owner user ID
	name: string; // Space name
	subdomain: string; // Unique subdomain for the space
	street: string; // Street address
	latitude: string; // Geographic latitude
	longitude: string; // Geographic longitude
	phone: string; // Contact phone number
	has_whatsapp: boolean; // Whether WhatsApp is available
	whatsapp_group_url: string | null; // WhatsApp group invitation URL
	email: string | null; // Contact email address
	facebook_messenger: string | null; // Facebook Messenger URL
	slogan: string | null; // Space slogan or tagline
	description: string | null; // Detailed space description and overview
	total_hot_desks: number; // Number of hot desks available
	total_dedicated_desks: number; // Number of dedicated desks available
	total_private_offices: number; // Number of private offices available
	total_meeting_rooms: number; // Number of meeting rooms available
	logo: string | null; // Path to space logo image
	cover_photo: string; // Path to space cover photo
	directions: string | null; // Directions to the space
	directions_photo: string | null; // Path to directions photo
	wifi_network: string | null; // WiFi network name
	wifi_password: string | null; // WiFi password
	amenities: Amenity[] | null; // List of available amenities with id, name, and icon
	website: string | null; // Space website URL
	facebook: string | null; // Facebook page URL
	instagram: string | null; // Instagram profile URL
	linkedin: string | null; // LinkedIn company page URL
	twitter: string | null; // Twitter profile URL
	verified_at: string | null; // Verification timestamp (ISO 8601)
	published_at: string | null; // Publication timestamp (ISO 8601)
	created_at: string; // Creation timestamp (ISO 8601)
	updated_at: string; // Last update timestamp (ISO 8601)
	country: Country; // Country information
	city: City; // City information with nested country
}

export interface Amenity {
	id: number; // Unique amenity identifier
	name: string; // Amenity name (e.g., "WiFi", "Coffee Machine")
	icon: string; // Icon identifier for UI display
}

export interface Country {
	id: number; // Unique country identifier
	name: string; // Country name
}

export interface City {
	id: number; // Unique city identifier
	name: string; // City name
	country: Country; // Nested country information
}

/**
 * *GET /space/hours*
 * Retrieve the opening hours for your space.
 *
 * *Note about Space Hours:*
 * If `closed` is `TRUE`, the space is closed all day, and `open_time`/`close_time` will be `null`
 * If `non_stop` is `TRUE`, the space is open 24/7, and `open_time`/`close_time` will be `null`
 * If both `closed` and `non_stop` are `FALSE`, the space operates with normal hours specified by `open_time` and `close_time`
 * Hours are always returned for all 7 days of the week, ordered by weekday (1-7)
 */

export interface SpaceHoursResponse {
	data: SpaceHour[];
}

export interface SpaceHour {
	id: number; // Unique space hour identifier
	weekday: Weekday; // Day of the week
	open_time: string | null; // Opening time in HH:MM:SS format (null if closed or non-stop)
	close_time: string | null; // Closing time in HH:MM:SS format (null if closed or non-stop)
	closed: boolean; // Whether the space is closed on this day
	non_stop: boolean; // Whether the space is open 24/7 on this day
	created_at: string; // Creation timestamp (ISO 8601)
	updated_at: string; // Last update timestamp (ISO 8601)
}

export enum Weekday {
	MONDAY = 1,
	TUESDAY = 2,
	WEDNESDAY = 3,
	THURSDAY = 4,
	FRIDAY = 5,
	SATURDAY = 6,
	SUNDAY = 7,
}

/**
 * *GET /space/photos*
 * Retrieve all photos for your space.
 *
 * *Note about Space Photos:*
 * Photos are returned ordered by the `order` field (ascending)
 * Three different sizes are available for each photo: original, medium, and thumbnail
 * Use thumbnail for gallery previews, medium for main displays, and original for full-size viewing
 * The `order` field determines the sequence in which photos should be displayed
 * If no photos exist for the space, an empty array will be returned
 */

export interface SpacePhotosResponse {
	data: SpacePhoto[];
}

export interface SpacePhoto {
	id: number; // Unique space photo identifier
	original_path: string; // Path to the original high-resolution image
	thumbnail_path: string; // Path to the thumbnail version (small size)
	medium_path: string; // Path to the medium-sized version
	order: number; // Display order of the photo (lower numbers first)
	created_at: string; // Creation timestamp (ISO 8601)
	updated_at: string; // Last update timestamp (ISO 8601)
}

/**
 * *GET /space/meeting-rooms*
 * Retrieve all meeting rooms for your space with their features and availability.
 *
 * *Note about Meeting Rooms:*
 * Availability times indicate the daily operational hours for each room
 * Features are grouped in a `features` object for easy filtering and display
 * If no meeting rooms exist for the space, an empty array will be returned
 * The `photo` field will be `null` if no photo has been uploaded for the room
 */

export interface SpaceMeetingRoomsResponse {
	data: MeetingRoom[];
}

export interface MeetingRoom {
	id: number; // Unique meeting room identifier
	name: string; // Meeting room name
	capacity: number; // Maximum number of people the room can accommodate
	photo: string | null; // Path to the meeting room photo
	description: string | null; // Detailed description of the meeting room
	available_from: string; // Start time of availability in HH:MM:SS format
	available_to: string; // End time of availability in HH:MM:SS format
	features: MeetingRoomFeatures; // Object containing all available features
	created_at: string; // Creation timestamp (ISO 8601)
	updated_at: string; // Last update timestamp (ISO 8601)
}

export interface MeetingRoomFeatures {
	has_whiteboard: boolean; // Room has a whiteboard
	has_projector: boolean; // Room has a projector
	has_monitor: boolean; // Room has a monitor/screen
	has_audio_conferencing_system: boolean; // Room has audio conferencing equipment
	has_video_conferencing_system: boolean; // Room has video conferencing equipment
	has_catering: boolean; // Catering services available
	has_tea_coffee: boolean; // Tea and coffee facilities available
	has_privacy_screen: boolean; // Room has privacy screens
	has_air_conditioning: boolean; // Room has air conditioning
	has_heating: boolean; // Room has heating
	has_security_lock: boolean; // Room has secure locking system
	has_natural_light: boolean; // Room has natural light/windows
}

/**
 * *GET /space/amenities*
 * Retrieve all amenities available at your space.
 *
 * *Note about Amenities:*
 * Returns all amenities configured for the space
 * Amenities are returned with consistent naming and icon identifiers
 * Icons can be used to display appropriate symbols in your UI
 * If no amenities are configured for the space, an empty array will be returned
 * This endpoint provides the same amenity data as included in the main space endpoint, but as a dedicated resource for easier filtering and management
 */

export interface SpaceAmenitiesResponse {
	data: Amenity[];
}

export interface Amenity {
	id: number; // Unique amenity identifier
	name: string; // Amenity name (e.g., "WiFi", "Coffee Machine")
	icon: string; // Icon identifier for UI display
}

/**
 * *GET /space/products*
 * Retrieve all products/memberships available at your space.
 *
 * *Note about Products:*
 * Products are returned ordered by `position` and then by `name`
 * The `settings` object contains product-specific configuration that varies by seating option type
 * `accessible_spaces` contains space IDs when `access_type` is "selected_spaces", otherwise `null`
 * `is_promotion` flag can be used for special styling or filtering
 * `is_offer` flag indicates that the product is a personalized offer and can only be sold via the admin panel
 * If no products exist for the space, an empty array will be returned
 * Prices are returned as decimal strings for precise monetary calculations
 */

export interface SpaceProductsResponse {
	data: SpaceProduct[];
}

export interface SpaceProduct {
	id: number; // Unique product identifier
	name: string; // Product name
	price: string; // Product price (decimal format)
	photo: string | null; // Path to product photo
	description: string | null; // Detailed product description
	disclaimer: string | null; // Legal disclaimer or terms for the product
	settings: Settings<SeatingOptionIDs>; // Product-specific settings (varies by seating option)
	access_type: AccessType;
	accessible_spaces: number[] | null; // List of space IDs accessible with this product
	available_from: string | null; // Date when product becomes available (YYYY-MM-DD)
	is_promotion: boolean; // Whether this product is marked as a promotion
	is_offer: boolean; // Whether this product is marked as a personalized offer
	is_published: boolean; // Whether this product is published and bookable
	position: number; // Display order position
	seating_option: SeatingOptionObject; // Seating option details (see below)
	created_at: string; // Creation timestamp (ISO 8601)
	updated_at: string; // Last update timestamp (ISO 8601)
}

export interface SeatingOptionObject {
	id: SeatingOptionIDs; // Unique seating option identifier
	name: string; // Seating option name (e.g., "Hot Desk", "Dedicated Desk")
}

/**
 * *Note about Product Settings:*
 * The `settings` object varies based on the seating option:
 */

export type Settings<T extends SeatingOptionIDs = SeatingOptionIDs> =
	T extends SeatingOptionIDs.DAY_PASS
		? DayPassSettings
		: T extends SeatingOptionIDs.HOT_DESK
			? HotDeskSettings
			: T extends SeatingOptionIDs.DEDICATED_DESK
				? DedicatedDeskSettings
				: T extends SeatingOptionIDs.MEETING_ROOM
					? MeetingRoomSettings
					: T extends SeatingOptionIDs.PRIVATE_OFFICE
						? PrivateOfficeSettings
						: never;

export interface DayPassSettings {
	duration: number;
	duration_type: DurationType;
	persons: number;
	time_start: string;
	time_ends: string;
}
export interface HotDeskSettings {
	duration: number;
	duration_unit: DurationUnit;
	/**
	 * Example: `[1, 2, 3, 4, 5]` means Monday through Friday access.
	 * An empty array (`[]`) signifies access for the entire week, from Monday through Sunday inclusive.
	 */
	weekdays: Weekday[];
	persons: number;
	meeting_room_hours: number;
}
export interface DedicatedDeskSettings {
	duration: number;
	duration_unit: DurationUnit;
	weekdays: Weekday[];
	persons: number;
	meeting_room_hours: number;
}
export interface MeetingRoomSettings {
	meeting_room_id: number;
	weekdays: Weekday[];
	duration: number;
	duration_unit: DurationUnit;
}
export interface PrivateOfficeSettings {
	capacity: number;
	duration: number;
	duration_unit: DurationUnit;
	meeting_room_hours: number;
}

export enum DurationUnit {
	HOURS = 1,
	DAYS = 2,
	MONTHS = 3,
	YEARS = 4,
}

export enum DurationType {
	HALF_DAY = 1,
	ONE_OR_MORE_FULL_DAYS = 2,
}

export enum AccessType {
	CURRENT_SPACE = "current_space", // Access only to the current space
	ALL_SPACES = "all_spaces", // Access to all spaces owned by the partner
	SELECTED_SPACES = "selected_spaces", // Access to specific spaces owned by the partner (see accessible_spaces)
}

export enum SeatingOptionIDs {
	DAY_PASS = 1,
	HOT_DESK = 2,
	DEDICATED_DESK = 3,
	MEETING_ROOM = 4,
	PRIVATE_OFFICE = 5,
}

/**
 * *GET /space/legal*
 * Retrieve legal documents and policies for your space.
 *
 * *Note about Products:*
 * This endpoint contains legal and policy documents that are typically long-form text
 * Text fields can contain line breaks and formatting
 * All legal document fields may be `null` if not configured for the space
 * Documents are returned as plain text and may require formatting for display
 * Use this endpoint when displaying legal pages, policy sections, or compliance information
 */

export interface SpaceLegalResponse {
	data: SpaceLegal;
}

export interface SpaceLegal {
	id: number; // Unique space legal identifier
	terms: string | null; // Terms and conditions for space usage
	privacy_policy: string | null; // Privacy policy document
	cookies_policy: string | null; // Cookies policy document
	internal_regulations: string | null; // Internal rules and regulations
}

/**
 * *GET /space/meeting-room-availability*
 * Retrieve available time slots for a specific meeting room product on a given date.
 *
 * *Query Parameters:*
 * date: string | required | Date in YYYY-MM-DD format (today or future dates only)
 * product_id: integer | required | ID of the meeting room product
 *
 * *Example Request:*
 * GET /space/meeting-room-availability?date=2024-03-15&product_id=5
 *
 * *Note about Meeting Room Availability:*
 * Time slots are generated in 1-hour intervals based on the meeting room's operating hours
 * Only available (non-booked) slots are returned
 * Slots are excluded if they conflict with existing active bookings
 * The product must belong to the authenticated space and be a meeting/event room type
 * Past dates are not allowed - only today or future dates
 * If the meeting room has no configured hours or the product has no associated meeting room, an empty array is returned
 * Time slots are returned in chronological order
 * Each slot represents a 1-hour booking window
 */

export interface MeetingRoomAvailabilityResponse {
  // Array of available time slots in "HH:MM - HH:MM" format
  // Empty array if no available slots
	available_slots: string[];
}

/**
 * *POST /access-codes/standalone*
 * Create a standalone access code that's not related to any product.
 *
 * *Body Parameters:*
 * start_date: string | required | Start date in YYYY-MM-DD format (today or future dates only)
 * end_date: string | required | End date in YYYY-MM-DD format (must be >= start_date)
 * customer: object | required | Customer information
 * customer.first_name: string | required | Customer's first name (max 255 characters)
 * customer.last_name: string | required | Customer's last name (max 255 characters)
 * customer.email: string | required | Customer's email address
 * customer.phone: string | optional | Customer's phone number (10-15 digits, optional + prefix)
 */

export interface AccessCodeStandaloneRequestBody {
  start_date: string;
  end_date: string;
  customer: CustomerRequestType;
}

export interface CustomerRequestType {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
}

export interface AccessCodeStandaloneResponse {
	data: AccessCode<"standalone">;
}

/**
 * *POST /access-codes/product*
 * Create an access code related to a product with automatic subscription creation.
 *
 * *Body Parameters:*
 * product_id: integer | required | ID of the product
 * start_date: string | required | Start date in YYYY-MM-DD format (today or future dates only)
 * customer: object | required | Customer information
 * customer.first_name: string | required | Customer's first name (max 255 characters)
 * customer.last_name: string | required | Customer's last name (max 255 characters)
 * customer.email: string | required | Customer's email address
 * customer.phone: string | optional | Customer's phone number (10-15 digits, optional + prefix)
 *
 * *Note about Product-based Access Codes:*
 * If a user with the provided email already exists (including soft-deleted users), they will be restored/updated and used
 * If no user exists, a new user account will be created with a random password
 * All created users will have their email marked as verified
 * Access codes created for today will have "active" status, future dates will have "inactive" status
 * QR codes are automatically generated and stored, accessible via the provided download URL
 * For product-based access codes, subscriptions are automatically created with the correct duration based on the product settings
 * Meeting room hours are automatically allocated if the product includes them
 * No emails are sent to customers - partners are responsible for delivering access codes
 * Product-based access codes support: Day Pass, Hot Desk, Dedicated Desk, and Private Office products
 * Meeting/Event Room products are not supported for direct access code creation
 */

export interface AccessCodeProductRequestBody {
  product_id: number;
  start_date: string;
  customer: CustomerRequestType;
}

export interface AccessCodeProductResponse {
	data: AccessCode<"product">;
}

export type AccessCodeType = "standalone" | "product";

export interface AccessCode<T extends AccessCodeType> {
	id: string; // Unique access code identifier
	customer_id: number; // Customer ID
	customer_type: "user"; // Always "user" for API-created codes
	space_id: number; // Space ID
	subscription_id: T extends "product" ? number : null;
	valid_from: string; // Start date timestamp (ISO 8601)
	valid_to: string; // End date timestamp (ISO 8601)
	is_primary: boolean; // Whether this is the primary access code
	unique_scans: number; // Number of unique scans
	total_scans: number; // Total number of scans
	status: AccessCodeStatus;
	qr_code_download_url: string; // URL to download the QR code
	customer: CustomerResponse; // Customer information
	created_at: string; // Creation timestamp (ISO 8601)
	updated_at: string; // Last update timestamp (ISO 8601)
}

export interface CustomerResponse {
	id: number; // Customer ID
	first_name: string; // Customer's first name
	last_name: string; // Customer's last name
	email: string; // Customer's email address
	phone: string | null; // Customer's phone number
}

export type AccessCodeStatus = "active" | "inactive" | "expired" | "canceled";

/**
 * *POST /meeting-room-booking*
 * Create a standalone access code that's not related to any product.
 *
 * *Body Parameters:*
 * product_id: number | required | ID of the meeting room product (must be meeting/event room type)
 * date: string | required | Booking date in YYYY-MM-DD format (today or future dates only)
 * selected_slots: string[] | required | Array of time slots in "HH:MM - HH:MM" format (minimum 1 slot). Each slot must start at the beginning of the hour (e.g., "09:00 - 10:00") and be exactly 1 hour long. No duplicates or overlapping slots allowed.
 * customer: object | required | Customer information
 * customer.first_name: string | required | Customer's first name (max 255 characters)
 * customer.last_name: string | required | Customer's last name (max 255 characters)
 * customer.email: string | required | Customer's email address
 * customer.phone: string | optional | Customer's phone number (10-15 digits, optional + prefix)
 * 
 * *Note about Meeting Room Booking:*
 * The product must be a meeting/event room type and belong to the authenticated space
 * All selected time slots must be available (not conflicting with existing bookings)
 * Time slots must be in "HH:MM - HH:MM" format and follow strict requirements:
 * - Must start at the beginning of the hour (e.g., "09:00 - 10:00", not "09:15 - 10:15")
 * - Must be exactly 1 hour long
 * - No duplicate slots allowed
 * - No overlapping slots allowed
 * Database locks are used to prevent double booking during the creation process
 * A subscription is automatically created for the product with proper duration
 * Meeting room hours are allocated if the product includes them
 * Access code is linked to the subscription and valid for the subscription period
 * If customer exists (including soft-deleted), they will be restored/updated
 * If customer doesn't exist, a new account is created with random password
 * No emails are sent - partners are responsible for delivering access codes
 * 
 * returns type AccessCodeResponse<AccessCode<"product" | "standalone">> 
 */

export interface MeetingRoomBookingRequestBody {
  product_id: number;
  date: string;
  selected_slots: string[];
  customer: CustomerRequestType;
}

export interface MeetingRoomBookingResponse {
  data: AccessCode<"product" | "standalone">;
}