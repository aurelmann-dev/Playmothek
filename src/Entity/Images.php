<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ImagesRepository;

#[ORM\Entity(repositoryClass: ImagesRepository::class)]
class Images
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $title;

    #[ORM\ManyToOne(targetEntity: Pages::class, inversedBy: 'images')]
    #[ORM\JoinColumn(nullable: false)]
    private $pages;

    // #[ORM\Column(type: 'datetime')]
    // private $created_at;

    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getPages(): ?Pages
    {
        return $this->pages;
    }

    public function setPages(?Pages $pages): self
    {
        $this->pages = $pages;

        return $this;
    }

    // public function getCreatedAt(): ?DateTimeInterface
    // {
    //     return $this->created_at;
    // }

    // public function setCreatedAt(\DateTimeInterface $created_at): self
    // {
    //     $this->created_at = $created_at;

    //     return $this;
    // }
}
