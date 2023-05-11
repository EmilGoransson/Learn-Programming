CREATE SEQUENCE student_s_id_seq START 1;

CREATE TABLE IF NOT EXISTS public.student
(
    s_id integer NOT NULL DEFAULT nextval('student_s_id_seq'::regclass),
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(100) COLLATE pg_catalog."default" NOT NULL,
    current_level integer NOT NULL DEFAULT 1,
    profile_picture text COLLATE pg_catalog."default" NOT NULL DEFAULT 'https://imgur.com/U7NDFB6.png'::text,
    pinned_items text[] COLLATE pg_catalog."default",
    CONSTRAINT student_pkey PRIMARY KEY (s_id)
);