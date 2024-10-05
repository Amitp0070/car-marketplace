import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing=pgTable('carListings',{
    id:serial('id').primaryKey(),
    listingTitle:varchar('listingTitle').notNull(),
    tagline:varchar('tagline'),
    originalPrice:varchar('originalPrice'),
    sellingPrice:varchar('sellingPrice'),
    category:varchar('category').notNull(),
    condition:varchar('condition').notNull(),
    type:varchar('type').notNull(),
    make:varchar('make').notNull(),
    model:varchar('model').notNull(),
    year:varchar('year').notNull(),
    drive_type:varchar('drive_type').notNull(),
    transmission:varchar('transmission').notNull(),
    fuel_type:varchar('fuel_type').notNull(),
    mileage:varchar('mileage').notNull(),
    engine_size:varchar('engine_size'),
    cylinder:varchar('cylinder'),
    color:varchar('color').notNull(),
    door:varchar('door').notNull(),
    vin:varchar('vin').notNull(),
    offerType:varchar('offerType'),
    listingDescription:varchar('listingDescription').notNull(),
    features:json('features'),
    createBy:varchar('createBy').notNull(),
    userName:varchar('userName').notNull().default('@CodeWithAmit'),
    userImageUrl:varchar('userImageUrl').default('https://png.pngtree.com/png-clipart/20220221/original/pngtree-om-namah-shivaya-hindi-text-png-image_7286740.png'),
    postedOn:varchar('postedOn'),
})

export const CarImages=pgTable('carImages',{
    id:serial('id').primaryKey(),
    imageUrl:varchar('imageUrl').notNull(),
    carListingId:integer('carListingId').notNull().references(()=>CarListing.id)
})