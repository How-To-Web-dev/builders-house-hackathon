# Partner API Documentation

## Overview

The Partner API allows partners to access and manage their space data programmatically. This API uses API key authentication and follows REST conventions. Endpoints request and response schemas are provided below, and the types are defined in [thia-api-types.ts](./thia-api-types.ts).

## Authentication

All API requests must include authentication headers:

```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
```

These credentials are unique to each space and can be found in your space settings.

### Authentication Errors

**401 Unauthorized - Missing Credentials**
```json
{
    "error": "Missing API credentials",
    "message": "X-API-Key and X-API-Secret headers are required"
}
```

**401 Unauthorized - Invalid Credentials**
```json
{
    "error": "Invalid API credentials",
    "message": "The provided API key and secret combination is invalid"
}
```

**403 Forbidden - Not a Partner**
```json
{
    "error": "Access denied",
    "message": "This API is only available for partners"
}
```

## Base URL

```
# prod
https://thia.work/api/v1/partner

# staging
https://thiadev.work/api/v1/partner
```

## Endpoints

### Spaces

#### Get Space Details

Retrieve detailed information about your space.

**Endpoint:** `GET /space`

**Headers:**
```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
Content-Type: application/json
```

**Response:** `200 OK`

```json
{
    "data": {
        "id": 1,
        "user_id": 1,
        "name": "Amazing Coworking Space",
        "subdomain": "amazing-space",
        "street": "123 Main Street",
        "latitude": "44.4268000",
        "longitude": "26.1025000",
        "phone": "+40123456789",
        "has_whatsapp": true,
        "whatsapp_group_url": "https://chat.whatsapp.com/example",
        "email": "contact@amazing-space.com",
        "facebook_messenger": "https://m.me/amazing-space",
        "slogan": "Where creativity meets productivity",
        "description": "A modern coworking space in the heart of the city designed to foster creativity and productivity for freelancers, startups, and established businesses alike.",
        "total_hot_desks": 20,
        "total_dedicated_desks": 10,
        "total_private_offices": 5,
        "total_meeting_rooms": 3,
        "logo": "/storage/logos/space-logo.png",
        "cover_photo": "/storage/photos/space-cover.jpg",
        "directions": "Take the elevator to the 3rd floor...",
        "directions_photo": "/storage/photos/directions.jpg",
        "wifi_network": "AmazingSpace_WiFi",
        "wifi_password": "welcome123",
        "amenities": [
             {
                 "id": 1,
                 "name": "WiFi",
                 "icon": "wifi"
             },
             {
                 "id": 2,
                 "name": "Coffee Machine",
                 "icon": "coffee"
             },
             {
                 "id": 3,
                 "name": "Printer",
                 "icon": "printer"
             },
             {
                 "id": 4,
                 "name": "Meeting Rooms",
                 "icon": "meeting-room"
             },
             {
                 "id": 5,
                 "name": "Parking",
                 "icon": "parking"
             }
         ],
        "website": "https://amazing-space.com",
        "facebook": "https://facebook.com/amazing-space",
        "instagram": "https://instagram.com/amazing-space",
        "linkedin": "https://linkedin.com/company/amazing-space",
        "twitter": "https://twitter.com/amazing_space",
        "verified_at": "2024-01-15T10:30:00.000000Z",
        "published_at": "2024-01-15T12:00:00.000000Z",
        "created_at": "2024-01-10T09:00:00.000000Z",
        "updated_at": "2024-01-20T14:30:00.000000Z",
        "country": {
            "id": 1,
            "name": "Romania"
        },
        "city": {
            "id": 1,
            "name": "Bucharest",
            "country": {
                "id": 1,
                "name": "Romania"
            }
        }
    }
}
```

**Field Descriptions:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique space identifier |
| `user_id` | integer | Owner user ID |
| `name` | string | Space name |
| `subdomain` | string | Unique subdomain for the space |
| `street` | string | Street address |
| `latitude` | string | Geographic latitude |
| `longitude` | string | Geographic longitude |
| `phone` | string | Contact phone number |
| `has_whatsapp` | boolean | Whether WhatsApp is available |
| `whatsapp_group_url` | string\|null | WhatsApp group invitation URL |
| `email` | string\|null | Contact email address |
| `facebook_messenger` | string\|null | Facebook Messenger URL |
| `slogan` | string\|null | Space slogan or tagline |
| `description` | string\|null | Detailed space description and overview |
| `total_hot_desks` | integer | Number of hot desks available |
| `total_dedicated_desks` | integer | Number of dedicated desks available |
| `total_private_offices` | integer | Number of private offices available |
| `total_meeting_rooms` | integer | Number of meeting rooms available |
| `logo` | string\|null | Path to space logo image |
| `cover_photo` | string | Path to space cover photo |
| `directions` | string\|null | Directions to the space |
| `directions_photo` | string\|null | Path to directions photo |
| `wifi_network` | string\|null | WiFi network name |
| `wifi_password` | string\|null | WiFi password |
| `amenities` | array\|null | List of available amenities with id, name, and icon |
| `website` | string\|null | Space website URL |
| `facebook` | string\|null | Facebook page URL |
| `instagram` | string\|null | Instagram profile URL |
| `linkedin` | string\|null | LinkedIn company page URL |
| `twitter` | string\|null | Twitter profile URL |
| `verified_at` | string\|null | Verification timestamp (ISO 8601) |
| `published_at` | string\|null | Publication timestamp (ISO 8601) |
| `created_at` | string | Creation timestamp (ISO 8601) |
| `updated_at` | string | Last update timestamp (ISO 8601) |
| `country` | object | Country information |
| `city` | object | City information with nested country |

### Amenity Object Structure

Each amenity object contains:

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique amenity identifier |
| `name` | string | Amenity name (e.g., "WiFi", "Coffee Machine") |
| `icon` | string | Icon identifier for UI display |

#### Get Space Hours

Retrieve the opening hours for your space.

**Endpoint:** `GET /space/hours`

**Headers:**
```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
Content-Type: application/json
```

**Response:** `200 OK`

```json
{
    "data": [
        {
            "id": 1,
            "weekday": 1,
            "open_time": "09:00:00",
            "close_time": "18:00:00",
            "closed": false,
            "non_stop": false,
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        },
        {
            "id": 2,
            "weekday": 2,
            "open_time": "09:00:00",
            "close_time": "18:00:00",
            "closed": false,
            "non_stop": false,
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        },
        {
            "id": 3,
            "weekday": 3,
            "open_time": null,
            "close_time": null,
            "closed": false,
            "non_stop": true,
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        },
        {
            "id": 4,
            "weekday": 4,
            "open_time": "09:00:00",
            "close_time": "18:00:00",
            "closed": false,
            "non_stop": false,
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        },
        {
            "id": 5,
            "weekday": 5,
            "open_time": "09:00:00",
            "close_time": "18:00:00",
            "closed": false,
            "non_stop": false,
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        },
        {
            "id": 6,
            "weekday": 6,
            "open_time": null,
            "close_time": null,
            "closed": true,
            "non_stop": false,
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        },
        {
            "id": 7,
            "weekday": 7,
            "open_time": null,
            "close_time": null,
            "closed": true,
            "non_stop": false,
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        }
    ]
}
```

**Space Hours Field Descriptions:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique space hour identifier |
| `weekday` | integer | Day of the week (1=Monday, 2=Tuesday, ..., 7=Sunday) |
| `open_time` | string\|null | Opening time in HH:MM:SS format (null if closed or non-stop) |
| `close_time` | string\|null | Closing time in HH:MM:SS format (null if closed or non-stop) |
| `closed` | boolean | Whether the space is closed on this day |
| `non_stop` | boolean | Whether the space is open 24/7 on this day |
| `created_at` | string | Creation timestamp (ISO 8601) |
| `updated_at` | string | Last update timestamp (ISO 8601) |

**Note about Space Hours:**
- If `closed` is `true`, the space is closed all day, and `open_time`/`close_time` will be `null`
- If `non_stop` is `true`, the space is open 24/7, and `open_time`/`close_time` will be `null`
- If both `closed` and `non_stop` are `false`, the space operates with normal hours specified by `open_time` and `close_time`
- Hours are always returned for all 7 days of the week, ordered by weekday (1-7)

#### Get Space Photos

Retrieve all photos for your space.

**Endpoint:** `GET /space/photos`

**Headers:**
```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
Content-Type: application/json
```

**Response:** `200 OK`

```json
{
    "data": [
        {
            "id": 1,
            "original_path": "/storage/photos/spaces/1/original/photo-1.jpg",
            "thumbnail_path": "/storage/photos/spaces/1/thumbnails/photo-1.jpg",
            "medium_path": "/storage/photos/spaces/1/medium/photo-1.jpg",
            "order": 1,
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        },
        {
            "id": 2,
            "original_path": "/storage/photos/spaces/1/original/photo-2.jpg",
            "thumbnail_path": "/storage/photos/spaces/1/thumbnails/photo-2.jpg",
            "medium_path": "/storage/photos/spaces/1/medium/photo-2.jpg",
            "order": 2,
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        },
        {
            "id": 3,
            "original_path": "/storage/photos/spaces/1/original/photo-3.jpg",
            "thumbnail_path": "/storage/photos/spaces/1/thumbnails/photo-3.jpg",
            "medium_path": "/storage/photos/spaces/1/medium/photo-3.jpg",
            "order": 3,
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        }
    ]
}
```

**Space Photos Field Descriptions:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique space photo identifier |
| `original_path` | string | Path to the original high-resolution image |
| `thumbnail_path` | string | Path to the thumbnail version (small size) |
| `medium_path` | string | Path to the medium-sized version |
| `order` | integer | Display order of the photo (lower numbers first) |
| `created_at` | string | Creation timestamp (ISO 8601) |
| `updated_at` | string | Last update timestamp (ISO 8601) |

**Note about Space Photos:**
- Photos are returned ordered by the `order` field (ascending)
- Three different sizes are available for each photo: original, medium, and thumbnail
- Use thumbnail for gallery previews, medium for main displays, and original for full-size viewing
- The `order` field determines the sequence in which photos should be displayed
- If no photos exist for the space, an empty array will be returned

#### Get Space Meeting Rooms

Retrieve all meeting rooms for your space with their features and availability.

**Endpoint:** `GET /space/meeting-rooms`

**Headers:**
```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
Content-Type: application/json
```

**Response:** `200 OK`

```json
{
    "data": [
        {
            "id": 1,
            "name": "Conference Room A",
            "capacity": 12,
            "photo": "/storage/meeting-rooms/conference-room-a.jpg",
            "description": "A spacious conference room perfect for team meetings and presentations.",
            "available_from": "08:00:00",
            "available_to": "20:00:00",
            "features": {
                "has_whiteboard": true,
                "has_projector": true,
                "has_monitor": true,
                "has_audio_conferencing_system": true,
                "has_video_conferencing_system": true,
                "has_catering": false,
                "has_tea_coffee": true,
                "has_privacy_screen": true,
                "has_air_conditioning": true,
                "has_heating": true,
                "has_security_lock": true,
                "has_natural_light": true
            },
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        },
        {
            "id": 2,
            "name": "Small Meeting Room",
            "capacity": 4,
            "photo": null,
            "description": "Intimate meeting space for small team discussions.",
            "available_from": "09:00:00",
            "available_to": "18:00:00",
            "features": {
                "has_whiteboard": true,
                "has_projector": false,
                "has_monitor": true,
                "has_audio_conferencing_system": false,
                "has_video_conferencing_system": false,
                "has_catering": false,
                "has_tea_coffee": true,
                "has_privacy_screen": false,
                "has_air_conditioning": true,
                "has_heating": true,
                "has_security_lock": false,
                "has_natural_light": true
            },
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        }
    ]
}
```

**Meeting Room Field Descriptions:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique meeting room identifier |
| `name` | string | Meeting room name |
| `capacity` | integer | Maximum number of people the room can accommodate |
| `photo` | string\|null | Path to the meeting room photo |
| `description` | string\|null | Detailed description of the meeting room |
| `available_from` | string | Start time of availability in HH:MM:SS format |
| `available_to` | string | End time of availability in HH:MM:SS format |
| `features` | object | Object containing all available features (see below) |
| `created_at` | string | Creation timestamp (ISO 8601) |
| `updated_at` | string | Last update timestamp (ISO 8601) |

**Meeting Room Features:**

| Feature | Type | Description |
|---------|------|-------------|
| `has_whiteboard` | boolean | Room has a whiteboard |
| `has_projector` | boolean | Room has a projector |
| `has_monitor` | boolean | Room has a monitor/screen |
| `has_audio_conferencing_system` | boolean | Room has audio conferencing equipment |
| `has_video_conferencing_system` | boolean | Room has video conferencing equipment |
| `has_catering` | boolean | Catering services available |
| `has_tea_coffee` | boolean | Tea and coffee facilities available |
| `has_privacy_screen` | boolean | Room has privacy screens |
| `has_air_conditioning` | boolean | Room has air conditioning |
| `has_heating` | boolean | Room has heating |
| `has_security_lock` | boolean | Room has secure locking system |
| `has_natural_light` | boolean | Room has natural light/windows |

**Note about Meeting Rooms:**
- Availability times indicate the daily operational hours for each room
- Features are grouped in a `features` object for easy filtering and display
- If no meeting rooms exist for the space, an empty array will be returned
- The `photo` field will be `null` if no photo has been uploaded for the room

#### Get Space Amenities

Retrieve all amenities available at your space.

**Endpoint:** `GET /space/amenities`

**Headers:**
```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
Content-Type: application/json
```

**Response:** `200 OK`

```json
{
    "data": [
        {
            "id": 1,
            "name": "WiFi",
            "icon": "wifi"
        },
        {
            "id": 2,
            "name": "Coffee Machine",
            "icon": "coffee"
        },
        {
            "id": 3,
            "name": "Printer",
            "icon": "printer"
        },
        {
            "id": 4,
            "name": "Meeting Rooms",
            "icon": "meeting-room"
        },
        {
            "id": 5,
            "name": "Parking",
            "icon": "parking"
        },
        {
            "id": 6,
            "name": "Kitchen",
            "icon": "kitchen"
        },
        {
            "id": 7,
            "name": "Reception",
            "icon": "reception"
        },
        {
            "id": 8,
            "name": "Security",
            "icon": "security"
        }
    ]
}
```

**Space Amenities Field Descriptions:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique amenity identifier |
| `name` | string | Amenity name (e.g., "WiFi", "Coffee Machine") |
| `icon` | string | Icon identifier for UI display |

**Note about Space Amenities:**
- Returns all amenities configured for the space
- Amenities are returned with consistent naming and icon identifiers
- Icons can be used to display appropriate symbols in your UI
- If no amenities are configured for the space, an empty array will be returned
- This endpoint provides the same amenity data as included in the main space endpoint, but as a dedicated resource for easier filtering and management

#### Get Space Products

Retrieve all products/memberships available at your space.

**Endpoint:** `GET /space/products`

**Headers:**
```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
Content-Type: application/json
```

**Response:** `200 OK`

```json
{
    "data": [
        {
            "id": 1,
            "name": "Hot Desk Monthly",
            "price": "299.00",
            "photo": "/storage/spaces/products/hot-desk-photo.jpg",
            "description": "Flexible workspace access with a monthly membership. Perfect for freelancers and remote workers who need professional workspace without long-term commitment.",
            "disclaimer": "Subject to availability. 24-hour cancellation policy applies.",
            "settings": {
                "duration": 1,
                "duration_unit": 3,
                "weekdays": [1, 2, 3, 4, 5],
                "persons": 1,
                "meeting_room_hours": 10
            },
            "access_type": "current_space",
            "accessible_spaces": null,
            "available_from": "2024-02-01",
            "is_promotion": false,
            "is_offer": false,
            "is_published": true,
            "position": 1,
            "seating_option": {
                "id": 2,
                "name": "Hot Desk"
            },
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        },
        {
            "id": 2,
            "name": "Dedicated Desk Premium",
            "price": "599.00",
            "photo": null,
            "description": "Your own dedicated workspace with storage and personalization options.",
            "disclaimer": "Minimum 3-month commitment required.",
            "settings": {
                "duration": 3,
                "duration_unit": 3,
                "weekdays": [1, 2, 3, 4, 5, 6, 7],
                "persons": 1,
                "meeting_room_hours": 20
            },
            "access_type": "selected_spaces",
            "accessible_spaces": [1, 2, 5],
            "available_from": null,
            "is_promotion": false,
            "is_offer": true,
            "is_published": true,
            "position": 2,
            "seating_option": {
                "id": 3,
                "name": "Dedicated Desk"
            },
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        },
        {
            "id": 3,
            "name": "Day Pass",
            "price": "35.00",
            "photo": "/storage/spaces/products/day-pass.jpg",
            "description": "Single day access to workspace facilities.",
            "disclaimer": "Valid for one day only. No refunds.",
            "settings": {
                "duration": 1,
                "duration_type": 2,
                "persons": 1,
                "time_start": "09:00:00",
                "time_end": "18:00:00"
            },
            "access_type": "current_space",
            "accessible_spaces": null,
            "available_from": null,
            "is_promotion": true,
            "is_offer": false,
            "is_published": true,
            "position": 3,
            "seating_option": {
                "id": 1,
                "name": "Day Pass"
            },
            "created_at": "2024-01-10T09:00:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        }
    ]
}
```

**Space Products Field Descriptions:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique product identifier |
| `name` | string | Product name |
| `price` | string | Product price (decimal format) |
| `photo` | string\|null | Path to product photo |
| `description` | string\|null | Detailed product description |
| `disclaimer` | string\|null | Legal disclaimer or terms for the product |
| `settings` | object | Product-specific settings (varies by seating option) |
| `access_type` | string | Type of space access (current_space, selected_spaces) |
| `accessible_spaces` | array\|null | List of space IDs accessible with this product |
| `available_from` | string\|null | Date when product becomes available (YYYY-MM-DD) |
| `is_promotion` | boolean | Whether this product is marked as a promotion |
| `is_offer` | boolean | Whether this product is marked as a personalized offer |
| `is_published` | boolean | Whether this product is published and bookable |
| `position` | integer | Display order position |
| `seating_option` | object | Seating option details (see below) |
| `created_at` | string | Creation timestamp (ISO 8601) |
| `updated_at` | string | Last update timestamp (ISO 8601) |

**Seating Option Object:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique seating option identifier |
| `name` | string | Seating option name (e.g., "Hot Desk", "Dedicated Desk") |

**Product Settings by Seating Option:**

The `settings` object varies based on the seating option:

- **Day Pass**: `duration`, `duration_type`, `persons`, `time_start`, `time_end`
- **Hot Desk/Dedicated Desk**: `duration`, `duration_unit`, `weekdays`, `persons`, `meeting_room_hours`
- **Meeting Room**: `meeting_room_id`, `weekdays`, `duration_unit`, `duration`
- **Private Office**: `capacity`, `duration`, `duration_unit`, `meeting_room_hours`

**Configuration Values Reference:**

**Duration Units (`duration_unit`):**

| Value | Meaning |
|-------|---------|
| `1` | Hours |
| `2` | Days |
| `3` | Months |
| `4` | Years |

**Day Pass Duration Types (`duration_type`):**

| Value | Meaning |
|-------|---------|
| `1` | Half a day (uses time_start and time_end) |
| `2` | One or more full days |

**Product Access Types (`access_type`):**

| Value | Meaning |
|-------|---------|
| `"current_space"` | Access only to the current space |
| `"all_spaces"` | Access to all spaces owned by the partner |
| `"selected_spaces"` | Access to specific spaces owned by the partner (see accessible_spaces array) |

**Seating Option IDs:**

| ID | Seating Option |
|----|----------------|
| `1` | Day Pass |
| `2` | Hot Desk |
| `3` | Dedicated Desk |
| `4` | Meeting/Event Room |
| `5` | Private Office |

**Weekdays Array:**

The `weekdays` array uses ISO 8601 day numbering:
- `1` = Monday
- `2` = Tuesday  
- `3` = Wednesday
- `4` = Thursday
- `5` = Friday
- `6` = Saturday
- `7` = Sunday

Example: `[1, 2, 3, 4, 5]` means Monday through Friday access.

An empty array (`[]`) signifies access for the entire week, from Monday through Sunday inclusive.

**Note about Space Products:**
- Products are returned ordered by `position` and then by `name`
- The `settings` object contains product-specific configuration that varies by seating option type
- `accessible_spaces` contains space IDs when `access_type` is "selected_spaces", otherwise `null`
- `is_promotion` flag can be used for special styling or filtering
- `is_offer` flag indicates that the product is a personalized offer and can only be sold via the admin panel
- If no products exist for the space, an empty array will be returned
- Prices are returned as decimal strings for precise monetary calculations

#### Get Space Legal Documents

Retrieve legal documents and policies for your space.

**Endpoint:** `GET /space/legal`

**Headers:**
```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
Content-Type: application/json
```

**Response:** `200 OK`

```json
{
    "data": {
        "id": 1,
        "terms": "TERMS AND CONDITIONS\n\n1. MEMBERSHIP TERMS\nBy purchasing a membership, you agree to abide by all space rules and regulations...\n\n2. PAYMENT TERMS\nAll payments are due in advance and are non-refundable...\n\n3. CANCELLATION POLICY\nMemberships may be cancelled with 30 days written notice...",
        "privacy_policy": "PRIVACY POLICY\n\nLast updated: January 1, 2024\n\n1. INFORMATION WE COLLECT\nWe collect information you provide directly to us when you create an account...\n\n2. HOW WE USE YOUR INFORMATION\nWe use the information we collect to provide, maintain, and improve our services...",
        "cookies_policy": "COOKIES POLICY\n\nThis website uses cookies to ensure you get the best experience on our website...\n\n1. WHAT ARE COOKIES\nCookies are small text files that are placed on your computer or mobile device...",
        "internal_regulations": "INTERNAL REGULATIONS\n\n1. OPERATING HOURS\nThe space is accessible 24/7 for members with appropriate access levels...\n\n2. NOISE POLICY\nPlease maintain reasonable noise levels to ensure a productive environment for all members...\n\n3. GUEST POLICY\nMembers may bring guests but are responsible for their conduct..."
    }
}
```

**Space Legal Field Descriptions:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique space identifier |
| `terms` | string\|null | Terms and conditions for space usage |
| `privacy_policy` | string\|null | Privacy policy document |
| `cookies_policy` | string\|null | Cookies policy document |
| `internal_regulations` | string\|null | Internal rules and regulations |

**Note about Space Legal Documents:**
- This endpoint contains legal and policy documents that are typically long-form text
- Text fields can contain line breaks and formatting
- All legal document fields may be `null` if not configured for the space
- Documents are returned as plain text and may require formatting for display
- Use this endpoint when displaying legal pages, policy sections, or compliance information

#### Get Meeting Room Availability

Check available time slots for a specific meeting room product on a given date.

**Endpoint:** `GET /space/meeting-room-availability`

**Headers:**
```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
Content-Type: application/json
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date` | string | Yes | Date in YYYY-MM-DD format (today or future dates only) |
| `product_id` | integer | Yes | ID of the meeting room product |

**Example Request:**
```
GET /space/meeting-room-availability?date=2024-03-15&product_id=5
```

**Response:** `200 OK`

```json
{
    "available_slots": [
        "09:00 - 10:00",
        "10:00 - 11:00",
        "12:00 - 13:00",
        "14:00 - 15:00",
        "15:00 - 16:00",
        "17:00 - 18:00"
    ]
}
```

**Response (No Available Slots):** `200 OK`

```json
{
    "available_slots": []
}
```

**Error Responses:**

**400 Bad Request - Invalid Product Type**
```json
{
    "error": "Product does not have the correct seating option",
    "message": "Product does not have the correct seating option"
}
```

**400 Bad Request - Validation Error**
```json
{
    "error": "The date field is required.",
    "message": "The date field is required."
}
```

**404 Not Found - Product Not Found**
```json
{
    "error": "Product not found or does not belong to this space",
    "message": "Product not found or does not belong to this space"
}
```

**Field Descriptions:**

| Field | Type | Description |
|-------|------|-------------|
| `available_slots` | array | Array of available time slots in "HH:MM - HH:MM" format |

**Note about Meeting Room Availability:**
- Time slots are generated in 1-hour intervals based on the meeting room's operating hours
- Only available (non-booked) slots are returned
- Slots are excluded if they conflict with existing active bookings
- The product must belong to the authenticated space and be a meeting/event room type
- Past dates are not allowed - only today or future dates
- If the meeting room has no configured hours or the product has no associated meeting room, an empty array is returned
- Time slots are returned in chronological order
- Each slot represents a 1-hour booking window

### Access Codes

#### Create Standalone Access Code

Create a standalone access code that's not related to any product.

**Endpoint:** `POST /access-codes/standalone`

**Headers:**
```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
Content-Type: application/json
```

**Request Body:**

```json
{
    "start_date": "2024-03-20",
    "end_date": "2024-03-22",
    "customer": {
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com",
        "phone": "+40123456789"
    }
}
```

**Request Body Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start_date` | string | Yes | Start date in YYYY-MM-DD format (today or future dates only) |
| `end_date` | string | Yes | End date in YYYY-MM-DD format (must be >= start_date) |
| `customer.first_name` | string | Yes | Customer's first name (max 255 characters) |
| `customer.last_name` | string | Yes | Customer's last name (max 255 characters) |
| `customer.email` | string | Yes | Customer's email address |
| `customer.phone` | string | No | Customer's phone number (10-15 digits, optional + prefix) |

**Response:** `201 Created`

```json
{
    "data": {
        "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "customer_id": 123,
        "customer_type": "user",
        "space_id": 1,
        "subscription_id": null,
        "valid_from": "2024-03-20T00:00:00.000000Z",
        "valid_to": "2024-03-22T23:59:59.000000Z",
        "is_primary": true,
        "unique_scans": 0,
        "total_scans": 0,
        "status": "inactive",
        "qr_code_download_url": "https://thia.work/qr-code/a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "customer": {
            "id": 123,
            "first_name": "John",
            "last_name": "Doe",
            "email": "john.doe@example.com",
            "phone": "+40123456789"
        },
        "created_at": "2024-03-15T10:30:00.000000Z",
        "updated_at": "2024-03-15T10:30:00.000000Z"
    }
}
```

#### Create Product-Based Access Code

Create an access code related to a product with automatic subscription creation.

**Endpoint:** `POST /access-codes/product`

**Headers:**
```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
Content-Type: application/json
```

**Request Body:**

```json
{
    "product_id": 5,
    "start_date": "2024-03-20",
    "customer": {
        "first_name": "Jane",
        "last_name": "Smith",
        "email": "jane.smith@example.com",
        "phone": "+40987654321"
    }
}
```

**Request Body Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | integer | Yes | ID of the space product (must belong to current space) |
| `start_date` | string | Yes | Start date in YYYY-MM-DD format (today or future dates only) |
| `customer.first_name` | string | Yes | Customer's first name (max 255 characters) |
| `customer.last_name` | string | Yes | Customer's last name (max 255 characters) |
| `customer.email` | string | Yes | Customer's email address |
| `customer.phone` | string | No | Customer's phone number (10-15 digits, optional + prefix) |

**Response:** `201 Created`

```json
{
    "data": {
        "id": "b2c3d4e5-f6g7-8901-bcde-f23456789012",
        "customer_id": 124,
        "customer_type": "user",
        "space_id": 1,
        "subscription_id": 89,
        "valid_from": "2024-03-20T00:00:00.000000Z",
        "valid_to": "2024-04-19T23:59:59.000000Z",
        "is_primary": true,
        "unique_scans": 0,
        "total_scans": 0,
        "status": "inactive",
        "qr_code_download_url": "https://thia.work/qr-code/b2c3d4e5-f6g7-8901-bcde-f23456789012",
        "customer": {
            "id": 124,
            "first_name": "Jane",
            "last_name": "Smith",
            "email": "jane.smith@example.com",
            "phone": "+40987654321"
        },
        "created_at": "2024-03-15T10:30:00.000000Z",
        "updated_at": "2024-03-15T10:30:00.000000Z"
    }
}
```

**Error Responses:**

**400 Bad Request - Invalid Product Type**
```json
{
    "error": "Invalid product type",
    "message": "Product type not supported for access code creation"
}
```

**404 Not Found - Product Not Found**
```json
{
    "error": "Product not found",
    "message": "Product not found or does not belong to this space"
}
```

**422 Unprocessable Entity - Validation Error**
```json
{
    "error": "The given data was invalid.",
    "message": "The start date field is required.",
    "errors": {
        "start_date": [
            "The start date field is required."
        ]
    }
}
```

**500 Internal Server Error**
```json
{
    "error": "Failed to create access code",
    "message": "Unable to create access code. Please try again."
}
```

**Access Code Field Descriptions:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique access code identifier (UUID) |
| `customer_id` | integer | Customer user ID |
| `customer_type` | string | Always "user" for API-created codes |
| `space_id` | integer | Space identifier |
| `subscription_id` | integer\|null | Related subscription ID (null for standalone codes) |
| `valid_from` | string | Access code validity start date/time (ISO 8601) |
| `valid_to` | string | Access code validity end date/time (ISO 8601) |
| `is_primary` | boolean | Whether this is the primary access code |
| `unique_scans` | integer | Number of unique scans |
| `total_scans` | integer | Total number of scans |
| `status` | string | Current status (active, inactive, expired, canceled) |
| `qr_code_download_url` | string | Direct download URL for the QR code PNG |
| `customer` | object | Customer information object |
| `created_at` | string | Creation timestamp (ISO 8601) |
| `updated_at` | string | Last update timestamp (ISO 8601) |

**Customer Object:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Customer user ID |
| `first_name` | string | Customer's first name |
| `last_name` | string | Customer's last name |
| `email` | string | Customer's email address |
| `phone` | string\|null | Customer's phone number |

**Note about Access Code Creation:**
- If a user with the provided email already exists (including soft-deleted users), they will be restored/updated and used
- If no user exists, a new user account will be created with a random password
- All created users will have their email marked as verified
- Access codes created for today will have "active" status, future dates will have "inactive" status
- QR codes are automatically generated and stored, accessible via the provided download URL
- For product-based access codes, subscriptions are automatically created with the correct duration based on the product settings
- Meeting room hours are automatically allocated if the product includes them
- No emails are sent to customers - partners are responsible for delivering access codes
- Product-based access codes support: Day Pass, Hot Desk, Dedicated Desk, and Private Office products
- Meeting/Event Room products are not supported for direct access code creation

#### Create Meeting Room Booking

Create a booking for specific meeting room time slots with automatic access code generation.

**Endpoint:** `POST /meeting-room-booking`

**Headers:**
```
X-API-Key: your_api_key
X-API-Secret: your_api_secret
Content-Type: application/json
```

**Request Body:**

```json
{
    "product_id": 12,
    "date": "2024-03-25",
    "selected_slots": [
        "10:00 - 11:00",
        "11:00 - 12:00",
        "14:00 - 15:00"
    ],
    "customer": {
        "first_name": "Alice",
        "last_name": "Johnson",
        "email": "alice.johnson@example.com",
        "phone": "+40123456789"
    }
}
```

**Request Body Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | integer | Yes | ID of the meeting room product (must be meeting/event room type) |
| `date` | string | Yes | Booking date in YYYY-MM-DD format (today or future dates only) |
| `selected_slots` | array | Yes | Array of time slots in "HH:MM - HH:MM" format (minimum 1 slot). Each slot must start at the beginning of the hour (e.g., "09:00 - 10:00") and be exactly 1 hour long. No duplicates or overlapping slots allowed. |
| `customer.first_name` | string | Yes | Customer's first name (max 255 characters) |
| `customer.last_name` | string | Yes | Customer's last name (max 255 characters) |
| `customer.email` | string | Yes | Customer's email address |
| `customer.phone` | string | No | Customer's phone number (10-15 digits, optional + prefix) |

**Response:** `201 Created`

```json
{
    "data": {
        "id": "c3d4e5f6-g7h8-9012-cdef-345678901234",
        "customer_id": 125,
        "customer_type": "user",
        "space_id": 1,
        "subscription_id": 42,
        "valid_from": "2024-03-25T00:00:00.000000Z",
        "valid_to": "2024-03-25T23:59:59.000000Z",
        "is_primary": true,
        "unique_scans": 0,
        "total_scans": 0,
        "status": "inactive",
        "qr_code_download_url": "https://thia.work/qr-code/c3d4e5f6-g7h8-9012-cdef-345678901234",
        "customer": {
            "id": 125,
            "first_name": "Alice",
            "last_name": "Johnson",
            "email": "alice.johnson@example.com",
            "phone": "+40123456789"
        },
        "created_at": "2024-03-15T10:30:00.000000Z",
        "updated_at": "2024-03-15T10:30:00.000000Z"
    }
}
```

**Error Responses:**

**400 Bad Request - Invalid Product Type**
```json
{
    "error": "Invalid product type",
    "message": "Product must be a meeting/event room type"
}
```

**400 Bad Request - Invalid Product Configuration**
```json
{
    "error": "Invalid product configuration",
    "message": "Product does not have a meeting room configured"
}
```

**400 Bad Request - Meeting Room Not Found**
```json
{
    "error": "Meeting room not found",
    "message": "The meeting room associated with this product was not found"
}
```

**404 Not Found - Product Not Found**
```json
{
    "error": "Product not found",
    "message": "Product not found or does not belong to this space"
}
```

**422 Unprocessable Entity - Validation Error**
```json
{
    "error": "The given data was invalid.",
    "message": "The date field is required.",
    "errors": {
        "date": [
            "The date field is required."
        ]
    }
}
```

**422 Unprocessable Entity - Invalid Time Slot Format**
```json
{
    "error": "The given data was invalid.",
    "message": "Time slots must start at the beginning of the hour (e.g., 09:00, 10:00).",
    "errors": {
        "selected_slots.0": [
            "Time slots must start at the beginning of the hour (e.g., 09:00, 10:00)."
        ]
    }
}
```

**422 Unprocessable Entity - Invalid Slot Duration**
```json
{
    "error": "The given data was invalid.",
    "message": "Each time slot must be exactly 1 hour long.",
    "errors": {
        "selected_slots.1": [
            "Each time slot must be exactly 1 hour long."
        ]
    }
}
```

**422 Unprocessable Entity - Duplicate or Overlapping Slots**
```json
{
    "error": "The given data was invalid.",
    "message": "Duplicate time slots are not allowed.",
    "errors": {
        "selected_slots": [
            "Duplicate time slots are not allowed."
        ]
    }
}
```

**500 Internal Server Error - Slot Conflict**
```json
{
    "error": "Failed to create meeting room booking",
    "message": "Some time slots are no longer available. Please refresh and try again."
}
```

**Note about Meeting Room Booking:**
- The product must be a meeting/event room type and belong to the authenticated space
- All selected time slots must be available (not conflicting with existing bookings)
- Time slots must be in "HH:MM - HH:MM" format and follow strict requirements:
  - Must start at the beginning of the hour (e.g., "09:00 - 10:00", not "09:15 - 10:15")
  - Must be exactly 1 hour long
  - No duplicate slots allowed
  - No overlapping slots allowed
- Database locks are used to prevent double booking during the creation process
- A subscription is automatically created for the product with proper duration
- Meeting room hours are allocated if the product includes them
- Access code is linked to the subscription and valid for the subscription period
- If customer exists (including soft-deleted), they will be restored/updated
- If customer doesn't exist, a new account is created with random password
- No emails are sent - partners are responsible for delivering access codes

## Rate Limiting

The API implements rate limiting to ensure fair usage:

- **60 requests per minute** per API key
- Rate limit headers are included in responses:
  - `X-RateLimit-Limit`: Total requests allowed
  - `X-RateLimit-Remaining`: Remaining requests in current window

**Rate Limit Exceeded:** `429 Too Many Requests`
```json
{
    "error": "Too Many Requests",
    "message": "Rate limit exceeded. Please try again later."
}
```

## Error Handling

All errors follow a consistent format:

```json
{
    "error": "Error Type",
    "message": "Human-readable error description"
}
```

**Common HTTP Status Codes:**

- `200 OK`: Request successful
- `400 Bad Request`: Invalid request format
- `401 Unauthorized`: Authentication failed
- `403 Forbidden`: Access denied
- `404 Not Found`: Resource not found
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

## Data Types

### Timestamps

All timestamps are returned in ISO 8601 format with timezone: `YYYY-MM-DDTHH:MM:SS.ssssssZ` and are based on the Europe/Bucharest time zone.

### Coordinates

Latitude and longitude are returned as decimal strings with 7 decimal places for precision.

### Arrays

Arrays (like amenities) can be `null` if no data is available, or contain an array of strings.

## Versioning

The API uses URL path versioning. The current version is `v1`. Future versions will be released as `v2`, `v3`, etc.

When breaking changes are introduced, a new version will be released, and the previous version will be maintained for a reasonable deprecation period.

## Support

For API support, please contact your account manager or submit a support ticket through the partner portal. 
