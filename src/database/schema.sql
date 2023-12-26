CREATE DATABASE store; 
-- after database created, open it and run this second query
CREATE TABLE IF NOT EXISTS "products" 
    (			
        "id"  SERIAL PRIMARY KEY,
        "name" VARCHAR(255) NOT NULL,
        "category" VARCHAR(255) NOT NULL,
        "status" VARCHAR(255) DEFAULT 'ACTIVE',
        "quantity" INTEGER NOT NULL DEFAULT 0,
        "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
        "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
        "deletedAt" TIMESTAMP WITH TIME ZONE
    );


