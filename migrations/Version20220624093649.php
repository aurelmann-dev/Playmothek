<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220624093649 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pages_users (pages_id INT NOT NULL, users_id INT NOT NULL, INDEX IDX_F970EC83401ADD27 (pages_id), INDEX IDX_F970EC8367B3B43D (users_id), PRIMARY KEY(pages_id, users_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE pages_users ADD CONSTRAINT FK_F970EC83401ADD27 FOREIGN KEY (pages_id) REFERENCES pages (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE pages_users ADD CONSTRAINT FK_F970EC8367B3B43D FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE pages_users');
    }
}
