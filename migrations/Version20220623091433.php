<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220623091433 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE users ADD name VARCHAR(100) NOT NULL, ADD firstname VARCHAR(255) NOT NULL, ADD age INT NOT NULL, ADD job VARCHAR(100) DEFAULT NULL, ADD postalcode INT DEFAULT NULL, ADD city VARCHAR(255) DEFAULT NULL, ADD pseudo VARCHAR(100) NOT NULL, ADD plymo_icon VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE users DROP name, DROP firstname, DROP age, DROP job, DROP postalcode, DROP city, DROP pseudo, DROP plymo_icon');
    }
}
